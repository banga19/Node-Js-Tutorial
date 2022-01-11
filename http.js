// !! HTTP built in module

const http = require("http");

const server = http.createServer((req,res)=> {
    if (req.url === '/'){
        res.end('welcome to our homepage')
    }
    if (req.url === 'about') {
        res.end('here is our short story')
    }
    res.end(
        `<h1> oops!</h1>
        <p> we cant seem to find what you are looking for</p>        
        `)
})

server.listen(4000)