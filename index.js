const express = require('express');
const app = express()
const morgan = require('morgan');

//middleware
app.use(express.json())
app.use(express.static('build'))

// create custom token named 'body' to add request body in logger
morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})
// pass custom morgan format as logger middleware
app.use(morgan(':method :url :status :response-time ms - :body'))

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'unknown endpoint'})
}

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req,res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`)
})
const getPerson = (id) => {
  return persons.filter(person => person.id ===id)[0]
}
app.get('/api/persons/:id', (req,res) => {
  const id = +req.params.id
  const person = getPerson(id)

  if (!person) {
    return res.status(404).send(`No person with id ${id}`)
  }
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id
  const person = getPerson(id)

  if (!person) {
    return res.status(404).send(`No person with id ${id}`)
  }
  persons = persons.filter(person => person.id !== id)
  res.status(204).send()
})
const generateRandomId = () => {
  return Math.floor(Math.random() * 100000)
}

const duplicatePerson = (name) => {
  let phoneNames = persons.map(person => person.name.toLowerCase())
  return phoneNames.find(pname => pname === name.toLowerCase())
}

app.post('/api/persons', (req,res) => {
  let body = req.body
  if (!body.name || !body.number) {
    return res.status(400).send({error: 'Must provide a name and number'})
  } else if (duplicatePerson(body.name)) {
    return res.status(400).send({error: 'name must be unique'})
  }
  let person = {
    name: body.name,
    number: body.number,
    id: generateRandomId()
  }
  persons = persons.concat(person)
  res.json(person)

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Listening on port' + PORT);
})
