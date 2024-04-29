"use strict"

import express from 'express';

const port = 3000;
const app = express();

let cards = []; // stores cards

// returns existing cards (or an error message if none exist)
app.get('/cards', (req, res) => {
    if (cartas.length === 0) {
        res.status(404).json('you have no cards yet!');
    } else
  res.json(cards);
});

