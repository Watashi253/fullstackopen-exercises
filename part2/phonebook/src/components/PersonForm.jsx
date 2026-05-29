import { useState } from "react"

const PersonForm = ({AddPerson, 
    newName, 
    handleChangeName, 
    newNumber,
    handleChangeNumber
}) => {

    return(
           <form onSubmit={AddPerson} >
        <div>
          name: <input
            value={newName}
            onChange={handleChangeName} />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleChangeNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
    )
}

export default PersonForm