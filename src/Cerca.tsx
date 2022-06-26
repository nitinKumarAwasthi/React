import React from 'react'
import Label_Input from './Label_Input'

function Cerca() {
  return (
    <div>
        <Label_Input label="Nome" inputType='text'/>
        <Label_Input label="Cognome" inputType='text'/>
        <Label_Input label="Telefono" inputType='number'/>
        <button type='button'>Cerca</button>
        
    </div>
  )
}

export default Cerca 