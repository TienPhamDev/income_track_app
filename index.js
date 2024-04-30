const express = require("express")
const Datastore = require("nedb")
const app = express()
const path = require("path")

app.set("view engine", "ejs")// ejs is a template engine
app.set("views", path.join(__dirname), "")

app.use("/assets", express.static("assets"))

app.listen(3000, () => {
  console.log("listening 3000")
})

const dataBase = new Datastore("database.db")
dataBase.loadDatabase()

app.use(express.static("public"))
app.use(express.json({limit :"1mb"}))


app.get("/", (req, res) => {
  res.render("index",{})
})
app.get("/api", (request, response) => {
  dataBase.find({}, (err, data) => {
    response.json(data)
  })
})

app.post("/api", (request, response) => {
  console.log(request.body)
  const data = request.body
  dataBase.insert(data)
  
})