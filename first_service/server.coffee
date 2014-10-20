http = require('http')

server = http.createServer( (request, response) ->
    response.writeHead(200, 
        "content-Type":"text/plain"
    )
    response.end("Hello World")
)

server.listen(8080)

console.log("Server running on 8080")