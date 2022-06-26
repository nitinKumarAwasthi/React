import React from 'react'
import Label_Input from './Label_Input'

function Modifica() {
  return (
    <div>
        <Label_Input label="ID contatto da modificare" inputType='number'/><button type='button'>Modifica</button><hr></hr>
    </div>
  )
}

export default Modifica