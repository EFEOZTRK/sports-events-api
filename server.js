import express from "express"
import db from "./src/db/database.js"

//Route imports
import eventsRoutes from "./src/routes/eventsRoutes.js"

export const app = express()

const PORT = 3000;

app.use(express.json())

app.use(express.static("public"))


// app.get("/test", (req,res)=>{
//     console.log("It logs");
//     return res.json({message: "Server runs!"})
// })

// Use routes
app.use("/api",eventsRoutes)

// Set a variable NODE_ENV = "test" so server wont run while tests are running
if(process.env.NODE_ENV !== "test"){
    app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
}


