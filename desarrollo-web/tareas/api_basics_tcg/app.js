/* Nicole Dávila Hernández
A01784217
29-04-2024

Actividad en clase: API básico para cartas */

"use strict"

import express from 'express';

const port = 3000;
const app = express();

app.use(express.json());

let cards = []; // stores cards

// returns existing cards (or an error message if none exist)
app.get('/cards', (req, res) => {
    if (cards.length === 0) {
        res.status(404).send('you have no cards yet!');
    } else
  res.status(200).send(cards);

});

// gets a card by its id
app.get('/cards/:id', (req, res) => {
    const card = cards.find(card => card.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).send('card not found');
    } else
  res.status(200).send(card);
});

/*receives a json with the new cards that will be added to the list.
checks that the json has all the necessary attributes or that the card doesn exist yet,
or it throws a 404 error. if the carrd was added successfully, it also send a success message */
app.post('/cards', (req, res) => {
    const { id, name, type, description } = req.body; // confirm attributes with teammates
    if (!id || !name || !type || !description) {
        res.status(404).send('missing attributes');
    } else if (cards.find(card => card.id === id)) {
        res.status(404).send('card already exists');
    } else {
        cards.push({ id, name, type, description });
        res.status(201).send('card added successfully');
    }
});

// deletes a card by its id, and checks if the card exist before it deletes it
app.delete('/cards/:id', (req, res) => {
    const card = cards.find(card => card.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).send('card not found');
    } else {
        cards = cards.filter(card => card.id !== parseInt(req.params.id));
        res.status(200).send('card deleted');
    }
});

// updates cards based on its id, and checks if the card exist before it updates it
app.put('/cards/:id', (req, res) => {
    const card = cards.find(card => card.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).send('card not found');
    } else {
        const { name, type, description } = req.body;
        if (name) card.name = name;
        if (type) card.type = type;
        if (description) card.description = description;
        res.status(201).send('card updated');
    }
});

app.listen(port,()=> {
    console.log(`Running on port ${port}`); // http://localhost:3000/cards ?
});

