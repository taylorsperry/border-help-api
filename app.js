import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.locals.rights = [
  { id: 1, title: 'You have the right to remain silent', detail: 'Detail for this right'}
]

app.locals.scenarios = [
  { id: 'a', title: 'You are asked for documents', detail: 'Detail for this scenario'}
]

export default app;