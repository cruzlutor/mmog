const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', JSON.parse(message).data);
  });

  ws.send(JSON.stringify({ response: 'ok' }));
});

server.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
