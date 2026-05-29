import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonenumber from './services/phonenumber'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    phonenumber
      .getAll()
      .then(initialValue => {
        console.log('effect')
        setPersons(initialValue)
        console.log('showing all numbers')
      }

      )
  }, [])

  const [newFind, setNewFind] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFind.toLowerCase()))

  const handleFilter = (event) => {
    setNewFind(event.target.value)
  }


  const AddPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const isThere = persons.some(
      person => person.name == newPerson.name
    )

    if(isThere){
      alert(`${newPerson.name} is already added to phonebook`)
      return
    }

    phonenumber
      .create(newPerson)
      .then( returnedPerson =>{
        console.log('promise fulfilled')
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')

        console.log('phonenumber created')
      })
  }

const handleChangeName = (event) => {
  setNewName(event.target.value)
}

const handleChangeNumber = (event) => {
  setNewNumber(event.target.value)
}


return (
  <div>
    <h2>Phonebook</h2>
    <Filter value={newFind} onChange={handleFilter} />

    <h2>Create new</h2>
    <PersonForm AddPerson={AddPerson}
      newName={newName}
      handleChangeName={handleChangeName}
      newNumber={newNumber}
      handleChangeNumber={handleChangeNumber}
    />

    <h2>Numbers</h2>
    <Persons persontoShow={personsToShow} />
  </div>
)
}

export default App
