import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TitoloSaluto from './views/Saluto';
// import TestoEsempio from "./views/TestoEsempio"
// import TestoEsempioConFigli from "./views/TestoEsempioConFigli"
import Titolo from './views/Titolo';
import Anagrafiche from './views/Anagrafiche';
import Modifica from './Modifica';
import Elimina from './Elimina';
import Cerca from './Cerca';

function App() {
  return (
    <>
    <Titolo titolo="Rubrica"/>
    <Anagrafiche/>
    <Modifica/>
    <Elimina/>
    <Cerca/>
      {/* <TitoloSaluto 
    <TestoEsempioConFigli eta={10} nome="nitin"/>
        nome='Francesco' 
      />
      <TitoloSaluto
        nome="Yuri"
        cognome="Garrisi"
      />
      <TestoEsempio testo={"Ciao"} />
        Prova di testo
        <button>Esempio di figlio</button>
      </TestoEsempioConFigli> */}
    </>
  );
}

export default App;
