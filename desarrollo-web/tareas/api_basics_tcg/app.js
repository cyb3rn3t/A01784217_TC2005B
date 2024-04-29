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
// gets a card by its id
app.get('/cards/:id', (req, res) => {
    const card = cards.find(card => card.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).json('card not found');
    } else
  res.json(card);
});

