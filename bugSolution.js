```javascript
const http = require('http');

const requestListener = (request, response) => {
  try {
    //Simulate an error
    //const a = 1/0;
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
```