const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running task asynchronously
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
      count++;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});