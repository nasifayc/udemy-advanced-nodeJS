const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const query = url.parse(req.url).query;
  const n = Number(querystring.parse(query)["n"]);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  console.log(sum);
  res.end(String(sum));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
