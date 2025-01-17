const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Update the path to point to your SQLite file
const dbPath = path.join(__dirname, '../db/fusion_sample_data.sqlite');

// Open the database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
    }
});

const runQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = { runQuery };