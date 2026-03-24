import { type } from "os";
import db from "../db/database.js"

export function createEvent(event){
    const {date,time,sport,home,away,venue,description} = event;

    if(!sport || typeof sport !== "string"){
        throw new Error("Invalid sport")
    }

    // Transform sport name to lower case and then make the first character uppercase (footBAll => football => Football) 
    const normalizedSportName = sport.trim().toLowerCase()
    const formattedSportName = normalizedSportName.charAt(0).toUpperCase() + normalizedSportName.slice(1);

    let sportRow  = db.prepare("SELECT id FROM sports WHERE name = ?").get(formattedSportName)

    // Add Sport if does not exists
    if(!sportRow ){
        const result = db.prepare("INSERT INTO sports (name) VALUES (?)")
        .run(formattedSportName)

        sportRow = {id: result.lastInsertRowid}
    } 

    const insert = db.prepare(`
        INSERT INTO events (date,time,_sportId,home,away,venue,description)
        VALUES (?,?,?,?,?,?,?)
        `)

        const resultingEvent = insert.run(date,time,sportRow.id,home,away,venue || null, description || null)

        return {id: resultingEvent.lastInsertRowid, ...event}
}

export function getAllEvents(){
    const retrieveData = db.prepare(`
        SELECT
        events.id,
        events.date,
        events.time,
        sports.name AS sport,
        events.home,
        events.away,
        events.venue,
        events.description
        FROM events
        JOIN sports ON events._sportId = sports.id
        `)    

        return retrieveData.all();
}

export function getEventById(id){
    const retrieveData = db.prepare(`
        SELECT
        events.id,
        events.date,
        events.time,
        sports.name AS sport,
        events.home,
        events.away,
        events.venue,
        events.description
        FROM events
        JOIN sports ON events._sportId = sports.id
        WHERE events.id = ?
        `)

        return retrieveData.get(id)
}