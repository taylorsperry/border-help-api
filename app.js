import express from 'express';
import cors from 'cors';
import { rights, scenarios } from './data';

const app = express();
app.use(cors());
app.use(express.json());

// app.locals.rights = require(rights)
// app.locals.scenarios = scenarios

app.locals.rights = [
  { id: 1, title: 'You have the right to remain silent', detail: 'Detail for this right' }
]

app.locals.scenarios = [
    { id: 'a', title: 'You are asked for documents', detail: 'Detail for this scenario' }
]

app.get('/api/v1/rights', (request, response) => {
  response.status(200).json(app.locals.rights)
})

app.get('api/v1/scenarios', (request, response) => {
  response.status(200).json(app.locals.scenarios)
})

export default app