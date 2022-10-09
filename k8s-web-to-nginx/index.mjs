import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

// route URL
app.get("/", (req, res) => {
    const helloMessage = `Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})


/**
 * This end point will proxy request to the nginx server and return a response from nginx to the client
 * nginx end point, route handler is async to connect to another server
 * create a service called nginx and use name to connect to deployment
 */

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})