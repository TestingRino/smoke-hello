const http = require("http");
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  if (req.url === "/healthz") { res.writeHead(200); return res.end("ok"); }
  // Proves the secret arrived at runtime without ever printing it.
  const has = process.env.GREETING ? "secret present" : "no secret";
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`smoke-hello: ${has}\n`);
}).listen(port, () => console.log(`listening on ${port}`));
