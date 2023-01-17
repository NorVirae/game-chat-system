const express = require("express");
const Socket = require("socket.io");
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = Socket(9000, {
    cors: {
        origin: "http://localhost:3001"
    }
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})