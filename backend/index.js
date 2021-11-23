var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const app = express();
import { getInfo } from './functions/getInfo.js';
const PORT = 3000;
app.get('/', (req, res) => {
    console.log(' GET: /');
    res.send('Hello from server!');
});
app.get('/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(' GET: /info');
    let url = req.header('info');
    if (typeof url !== 'undefined') {
        res.send(yield getInfo(url));
    }
    else {
        res.end();
    }
}));
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
