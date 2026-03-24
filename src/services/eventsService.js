import db from "../db/database.js"

export function createEvent(event){
    const {date,time,sport,home,away} = event;

    const insert = db.prepare(`
        INSERT INTO events (date,time,sport,home,away)
        VALUES (?,?,?,?,?)
        `)

        const resultingEvent = insert.run(date,time,sport,home,away)

        return {id: resultingEvent.lastInsertRowid, ...event}
}