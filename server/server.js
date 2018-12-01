'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const publicPath = path.join(__dirname, '../client/build');
const compression = require('compression');


const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application listening on port:${port}`);
});
