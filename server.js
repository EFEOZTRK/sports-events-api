import express from "express"
import db from "./src/db/database.js"

//Route imports
import eventsRoutes from "./src/routes/eventsRoutes.js"

const app = express()

const PORT = 3000;

app.use(express.json())

app.use(express.static("public"))


// app.get("/test", (req,res)=>{
//     console.log("It logs");
//     return res.json({message: "Server runs!"})
// })

// Use routes
app.use("/api",eventsRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
