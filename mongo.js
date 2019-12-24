const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const name = process.argv[3]
const number = process.argv[4]

const mongoDBpw = process.env.MONGODB_PW

const url =
    `mongodb+srv://kingkode:${mongoDBpw}@cluster0-fv0ul.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)


if (process.argv.length > 3) { // add person
    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(response => {
        console.log(`Added ${name} number ${number} to phonebook.`)
        mongoose.connection.close()
    })
} else { // display all people
    Person.find({}).then(result => {
        console.log('Phonebook:')
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}


