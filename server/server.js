'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const publicPath = path.join(__dirname, '../client/build');
const compression = require('compression');

const WebSocketServer = require('ws').Server;
const server = require('http').createServer();
const exec = require('child_process').exec;

const wss = new WebSocketServer({ server: server });
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

let pushDataInterval;

wss.on('connection', function connection(ws) {
   console.log('clients connected: ', wss.clients.size);

  if (!pushDataInterval) {
    pushDataInterval = getServerLoad();
  }

  if (ws.readyState === ws.OPEN) {
    ws.send('welcome!');
  }

  ws.on('close', function close() {
    if (wss.clients.size === 0) {
      clearInterval(pushDataInterval);
      pushDataInterval = null;
    }
    console.log('disconnected');
  });

  ws.on('error', function error() {
    console.log('error');
  });
});

const getServerLoad = () => {
    return setInterval(() => {
        const loadScript = exec(`~./load.sh`);

        loadScript.stdout.on('data', (data) => {
            wss.broadcast(JSON.stringify({name: 'load', data}));
        });
    }, 2 * 1000);
};

wss.broadcast = function broadcast(data) {
    console.log('Broadcasting: ', data);
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
};

const port = process.env.PORT || 3000;

server.on('request', app);
server.listen(port, () => {
    console.log(`Application listening on port:${port}`);
});
