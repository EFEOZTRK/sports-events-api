import Database from "better-sqlite3";

const db = new Database("events.db")


db.prepare(`
    CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    time TEXT,
    sport TEXT,
    home TEXT,
    away TEXT
    )
    
    `).run();

   export default db