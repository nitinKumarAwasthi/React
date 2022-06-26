import React from 'react'
import Label_Input from '../Label_Input'

function Anagrafiche() {
  return (
    <div>
      <form>
        <Label_Input label="Nome" inputType='text'/>
        <Label_Input label="Cognome" inputType='text'/>
        <Label_Input label="Telefono" inputType='number'/>
        <Label_Input label="Data di nascita" inputType='date'/>
        <Label_Input label="Indirizzo" inputType='text'/>
        <Label_Input label="Civico" inputType='text'/>
        <Label_Input label="Visibile" inputType='checkbox'/>
        <button  type="button">Inserisci</button><hr></hr>
        </form>
    </div>
  )
}

export default Anagrafiche