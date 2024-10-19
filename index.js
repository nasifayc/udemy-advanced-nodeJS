const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { Worker } = require("worker_threads");

const server = http.createServer(async (req, res) => {
  res.write("Your request is being processed...\n");
  console.log("Your request is being processed...\n");
  const query = url.parse(req.url).query;
  const n = Number(querystring.parse(query)["n"]);
  let sum = await findSum(n);

  console.log(sum);

  res.end(`Sum = ${sum}`);
});

function findSum(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./workers/summation.js", {
      workerData: { n },
    });

    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
