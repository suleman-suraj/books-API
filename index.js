const express =require("express")
const booksRoute = require("./routes/booksRoute")
const logger = require("./middlewares/books.logger")

const app = express()

//middleware
app.use(express.json())
app.use(logger);

app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
  res.json("Welcome to our Library")
})

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("server is working")
})