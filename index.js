import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import taskPath from './src/path/Task/task.js';

dotenv.config();
const app = express();
const PORT = process.env.PUERTO || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/task", taskPath);

app.use((req, res) => {
  res.status(401).json({message: "Error: No encontrado."})
});

// Port where server is running.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});