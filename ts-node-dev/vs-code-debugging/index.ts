import express from "express"

console.log("start")

const app = express()
const port = 8080

app.get("/", (_, res) => {
  // play with changing these values with different debug configurations
  const x = 0
  res.send((x + 0).toString())
})

app.listen(port, () => console.log(`listening on ${port}`))
