const express = require("express")
const Datastore = require("nedb")
const app = express()
app.listen(3000, () => {
  console.log("listening 3000")
})

const dataBase = new Datastore("database.db")
dataBase.loadDatabase()

app.use(express.static("public"))
app.use(express.json({limit :"1mb"}))

app.post("/api", (request, response) => {
  console.log(request.body)
  const data = request.body
  dataBase.insert(data)
  response.json({
    status:"success"
  })
})