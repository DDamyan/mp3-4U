import express from 'express';
const app = express();

import info from './functions/info.js';
import video from './functions/video.js';

const PORT = 3000;

app.get('/', (req, res) => {
  console.log(' GET: /');
  res.send('Hello from server!');
});

app.get('/info', info);

app.get('/video', video);

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
