import express from 'express';
const app = express();
import { getInfo } from './functions/getInfo.js';
const PORT = 3000;
app.get('/', (req, res) => {
    console.log(' GET: /');
    res.send('Hello from server!');
});
app.get('/info', async (req, res) => {
    console.log(' GET: /info');
    let url = req.header('info');
    if (typeof url !== 'undefined') {
        res.send(await getInfo(url));
    }
    else {
        res.end();
    }
});
app.listen(PORT, () => {
    console.log(`=> Server listening at http://localhost:${PORT}`);
});
// const express = require('express');
// const app = express();
// const PORT = 3000;
// app.get('/', (req, res) => {
//   console.log('-Connected');
//   res.send('Hello World!');
// });
// app.listen(PORT, () => {
//   console.log(`=> Server listening at http://localhost:${PORT}`);
// });
