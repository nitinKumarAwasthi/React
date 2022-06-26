import React from 'react'

interface LbProps{
    label: string,
    inputType: string 
}

function Label_Input(props: LbProps) {
    // const arr: string = ["text", "number", "date"];
  return (
    <div>
        <label>{props.label}</label><input type={props.inputType}/><br></br>
    </div>
  )

}

export default Label_Input