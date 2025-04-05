// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;
// const cors = require('cors')
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   }))
// app.get('/', (req, res)=>{
//     res.send("congratulation you are connected to Express backend!")
// })
// app.get('/api', (req, res)=>{
//     res.status(200).json({status: "Success", message: "If you see this message, congratulation you received this message from Express backend!"})
// })

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const http = require('http');
const port = process.env.PORT || 8080;

// Create simple HTTP server
const server = http.createServer((req, res) => {
  // Health check endpoint
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  // Default response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('🚀 Deployment Successful!');
});

// Start server
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
