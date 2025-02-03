# Node.js Server Freeze on Long Request

This repository demonstrates a common Node.js issue where a long-running request can cause the server to freeze, making it unresponsive to new connections.  The example uses a simple `for` loop to simulate a lengthy operation, but it could represent any computationally expensive task.

**Problem:** The synchronous nature of the request handling blocks the event loop, preventing the server from processing further requests until the long-running task is complete.

**Solution:** Employ asynchronous programming techniques using promises or async/await to prevent blocking the event loop.  This ensures that the server remains responsive even during long operations.

**Files:**
* `server.js`: Demonstrates the problematic synchronous approach.
* `serverSolution.js`: Shows the solution using asynchronous operations.