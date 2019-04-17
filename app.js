const express = require('express')
const cors = require('cors')
const { intro, rights, scenarios, help } = require('./data')


const app = express();
app.use(cors());
app.use(express.json());

app.locals.intro = intro;
app.locals.rights = rights;
app.locals.scenarios = scenarios;
app.locals.help = help;

app.get('/api/v1/intro', (request, response) => {
  response.status(200).json(app.locals.intro)
})

app.get('/api/v1/rights', (request, response) => {
  response.status(200).json(app.locals.rights)
})

app.get('/api/v1/scenarios', (request, response) => {
  response.status(200).json(app.locals.scenarios)
})

app.get('/api/v1/help', (request, response) => {
  response.status(200).json(app.locals.help)
})

export default app