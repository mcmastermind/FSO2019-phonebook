require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const Person = require('./models/person')

app.use(bodyParser.json())

morgan.token('post-request', (req,res) => { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-request'))

app.use(express.static('build'))

// get phonebook info
app.get('/info', (req, res) => {
    Person.find({})
        .then(persons => {
            res.send(`Phonebook has info for ${persons.length} peope.<br/><br/>${new Date()}`)
        })
        .catch(error => next(error))
})

// get all persons
app.get('/api/persons', (req, res, next) => {
    Person.find({})
        .then(persons => {
            res.json(persons.map(person => person.toJSON()))
        })
        .catch(error => next(error))
})
// get person by id
app.get('/api/persons/:id', (req, res, next ) => {
    Person.findById(req.params.id)
        .then(person => {
            res.json(person.toJSON())
        })
        .catch(error => next(error))
})

// delete person
app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(mDBresponse => {
            console.log('deleted successfully')
            res.status(204).end()
        })
        .catch(error => next(error))
})

// update person by id
app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        })
        .catch(error => next(error))
})

// add person
app.post('/api/persons', (req, res, next) => {
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedPerson => {
            res.json(savedPerson.toJSON())
        })
        .catch(error => next(error))
})

// fires if no other route is taken
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

// handler for requests with errors
const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }

    next(error)
}
app.use(errorHandler)

// specify and listen to port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})