import express from "express"
import { addEvent } from "../controllers/eventsController.js"
import { getEvents } from "../controllers/eventsController.js"
import { getEvent } from "../controllers/eventsController.js"

const router = express.Router()

router.post("/events", addEvent)

router.get("/events", getEvents)

router.get("/events/:id", getEvent)

export default router