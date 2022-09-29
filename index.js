const http = require('http')
const fs = require('fs').promises
const express = require('express')
let app = express()

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('index.html')
        res.end(data)
    } catch(err) {
        console.error(err)
        res.writeHead(500, {'Content-type' : 'text/plain; charset : utf-8'})
        res.end(err.message)
    }
})

server.listen(8080)

server.on('listening', () => {
    console.log('Checking server operation in port 8080')
})