import express from "express"
import { addEvent } from "../controllers/eventsController.js"

const router = express.Router()

router.post("/events", addEvent)


export default router