// worker threads are usefull for handling CPU intensive tasks and for non-blockink code

// Using worker threads allows the main thread to remain responsive and offload CPU-intensive tasks to separate threads.
// This prevents blocking the event loop and improves performance for CPU-bound tasks.

const { workerData, parentPort } = require("worker_threads");

const n = workerData.n;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum = sum + i;
}

parentPort.postMessage(sum);
