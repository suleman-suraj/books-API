const express = require("express")
const booksRoute = require("./routes/booksRoute")
const app = express()
//middleware
app.use(express.json())

app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
    res.json("Welcome to our Library")
})


const PORT = 7000;
app.listen(PORT, ()=>{
    console.log("server is running successfully")
})