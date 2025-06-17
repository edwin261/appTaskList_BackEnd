const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let taskRecords = [];
let idCounter = 1;

//Method[GET]: list all task
app.get('/task', (req, res) => {
  res.json(taskRecords);
});

// Method[POST]: Add a new task to array
app.post('/task', (req, res) => {
  const task = { id: idCounter++, ...req.body };
  taskRecords.push(task);
  res.status(201).json(task);
});

app.put('/task', (req, res) => {
  const task = { ...req.body };
  let index = taskRecords.findIndex(t => t.id === task.id);
  if (index > -1) {
    taskRecords[index] = { ...task };
  }
  res.status(200).json(taskRecords);
});

// Method[DELETE]: Delete a task record
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  taskRecords = taskRecords.filter(task => task.id !== id);
  res.status(204).send();
});

// Port where server is running.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});