var http = require("http");

const PORT = 8081;
const data = {  
  phone: '18602100000', 
     email: 'guestcaredominos@jublfood.com' 
 }
 
const httpServer = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.end("Welcome to Dominos");
  } else if (req.url === "/contact") {
    res.end(`phone: ${data.phone} \nemail: ${data.email}`);
  } else {
    res.end("Invalid URL");
  }
});
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
module.exports = httpServer;
