const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// CREATE
app.post('/users', (req, res) => {
  users.push(req.body);
  res.send('User created');
});

// READ
app.get('/users', (req, res) => {
  res.json(users);
});

// UPDATE
app.put('/users/:index', (req, res) => {
  users[req.params.index] = req.body;
  res.send('User updated');
});

// DELETE
app.delete('/users/:index', (req, res) => {
  users.splice(req.params.index, 1);
  res.send('User deleted');
});

app.listen(3000, () => console.log('Server running'));


// login feature

// validacion usuario

// dashboard agregado

// pago simulado

// error corregido