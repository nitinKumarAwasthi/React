import React from 'react'

interface IProps{
    titolo: string
}

function Titolo(props: IProps) {
  return (
    <>
    <div className='titolo'>{props.titolo}<br></br>
    </div>
    <button type="button">Visualizza</button><hr></hr>

    </>
  )
}

export default Titolo


// Partendo dall'interfaccia dell'esercizio dell Rubrica,
// realizzare in un nuovo progetto React i componenti che,
// secondo il vostro giudizio, possono essere delle "porzioni atomiche" dell'interfaccia.
// Ognuno di questi componenti si dovrà trovare all'interno della cartella "src/views". 
// Il file "App.tsx" richiamerà opportunamente i componenti figli, in modo da ottenere un'interfaccia identica a quella di partenza.
// NON IMPLEMENTARE LE FUNZIONALITà (solo la grafica).