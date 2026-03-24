import Database from "better-sqlite3";

const db = new Database("events.db")

//Sports table
db.prepare(`
    CREATE TABLE IF NOT EXISTS sports(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
    )
    `).run()


// Events table
db.prepare(`
    CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    time TEXT,
    _sportId INTEGER,
    home TEXT,
    away TEXT,
    venue TEXT,
    description TEXT,
    FOREIGN KEY (_sportId) REFERENCES sports(id)
    )
    
    `).run();

   export default db