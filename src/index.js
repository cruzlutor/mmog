const ws = new WebSocket('ws://127.0.0.1:3000');

ws.onopen = () => {
  ws.send(JSON.stringify({ data: 'ok' }));
};

ws.onmessage = event => {
  console.log(event);
};
