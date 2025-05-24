const { Pool } = require('pg');
const { database } = require('../set');
console.log('[DB] Initializing database connection...');

const pool = new Pool({
    connectionString: database,
    ssl: { rejectUnauthorized: false }
});

async function initializeDatabase() {
    const client = await pool.connect();
    console.log('[DB] Checking and creating settings tables...');
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS settings (
                id SERIAL PRIMARY KEY,
                key TEXT UNIQUE NOT NULL,
                value TEXT NOT NULL
            );
        `);
      
      await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                num TEXT PRIMARY KEY
            );
        `);


        const defaultSettings = {
            prefix: '.',
            packname: 'RAVEN-BOT',
            mode: 'PUBLIC',
            wapresence: 'online',
            autoview: 'TRUE',
            autolike: 'TRUE',
            autoread: 'FALSE',
            autobio: 'FALSE',
            anticall: 'TRUE'  
        };

        for (const [key, value] of Object.entries(defaultSettings)) {
            await client.query(`
                INSERT INTO settings (key, value) 
                VALUES ($1, $2)
                ON CONFLICT (key) DO NOTHING;
            `, [key, value]);
        }

        console.log('[DB] Database tables initialized successfully.');
    } catch (error) {
        console.error('[DB] Error initializing database:', error);
    } finally {
        client.release();
    }
}

async function getSettings() {
    try {
        const res = await pool.query("SELECT key, value FROM settings");
        const settings = {};

        res.rows.forEach(row => {
            settings[row.key] = row.value === 'TRUE' ? true : row.value === 'TRUE' ? false : row.value;
        });


        return settings;
    } catch (error) {
        console.error('[DB] Error fetching settings:', error);
        return {};
    }
}


async function updateSetting(key, value) {
    console.log(`[DB] Updating setting: ${key} -> ${value}`);
    try {
        await pool.query(`
            INSERT INTO settings (key, value) 
            VALUES ($1, $2)
            ON CONFLICT (key) DO UPDATE 
            SET value = EXCLUDED.value;
        `, [key, value]);

        console.log(`[DB] Setting updated successfully: ${key} -> ${value}`);
    } catch (error) {
        console.error(`[DB] Error updating setting: ${key}`, error);
    }
}

initializeDatabase().catch(console.error);

module.exports = { updateSetting, getSettings };
