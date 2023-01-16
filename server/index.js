const express = require("express")
const http = require("http")
const cors = require("cors")
const app = express()

const {Server } = require("socket.io")


app.use(cors())

const port = process.env.PORT || 8080

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => {
    console.log("Server connected to ",socket.id)

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id)
    })
})


server.listen(port, () => {
    console.log("SERVER RUNNING...")
})