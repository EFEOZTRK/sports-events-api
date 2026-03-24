import {createEvent} from "../services/eventsService.js"
import { getAllEvents } from "../services/eventsService.js"

export function addEvent(req,res){
    const {date,time,sport,home,away} = req.body

    if(!date || !time || !sport || !home || !away){
        return res.status(400).json({error: "Please fill every field! "})
    }

    try{
        const newEvent = createEvent({date,time,sport,home,away})
        return res.status(201).json({message: "Event created successfully", event: newEvent})
    }
    catch(err){
        return res.status(500).json({error: "Server error"})
    }
}

export function getEvents(req,res){
    try{
        const events = getAllEvents()
        return res.status(200).json({events})
    }
    catch(err){
        console.log(`ERROR: ${err}`);
        return res.status(500).json({error: "Server error"})
    }
}