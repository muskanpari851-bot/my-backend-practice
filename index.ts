import http,{ServerResponse, IncomingMessage} from "http";


const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if(req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, World!");
    }   
    if(req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }
    else if(req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact Page");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }   
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});