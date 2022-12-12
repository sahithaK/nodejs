var http = require('http');
var fs = require('fs');
var url = require('url');

const port = process.env.port || 3000;

var server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url == "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/login.html", "UTF-8").pipe(res);
    } else if (req.method === "POST" && req.url == "/login") {
        var body = '';
        req.on("data", function (chunk) {
            body += chunk
        });

        req.on("end", function () {

            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            var myUrl = new URL(`http://localhost:3000/login?${body}`)
            var fname = parseInt(myUrl.searchParams.get('fname'))
            var lname = parseInt(myUrl.searchParams.get('lname'))
            res.write(fs.readFileSync("./public/login.html"));
            res.write(`<h1> result is : ${n1 + n2}</h1>`)
            res.end('')
        });
    } else {
        res.end("This is error")
    }
})

server.listen(port, () => {
    console.log("App is running at " + port)
});