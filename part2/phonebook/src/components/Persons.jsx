const Persons = ({persontoShow}) => {

  const ShowNum = ({ person }) => {
      return (
      <li>
        {person.name} {person.number}
      </li>
    )
  }

    return (
        <ul>
           {persontoShow.map(person =>
        <ShowNum key={person.name} person={person}/>
      )}
        </ul>
    )
}

export default Persons