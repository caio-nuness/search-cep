import React,{useState, useEffect} from 'react'
import api from '../services/api';
import './App.css'
import './media.css'
import {Header} from '../components/Header';

function App() {

  const [cep, setCep] = useState({})
  const [input, setInput] = useState("")

  async function activeSearch() {
    try {
         const { data } = await api.get(`${input}/json`)
         setCep(data)
         setInput('')
         console.log(data)
    } catch (err) {
        console.log(`A API apresentou o erro >>> ${err}`)
    }
 }

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <div className='body'>
        <div className='box'>
          <div className='box-inputs'>
              <input onChange={(event) => setInput(event.target.value)} className="input" type="text" placeholder="Insira um cep"/> <br/>
              <input onClick={activeSearch} className="button" type="button" value="Buscar" />
          </div>

         {Object.keys(cep).length > 0 && (
            <div className='area-results'>
                <h3 className='sub-title'>Dados Encontrados</h3>
                <p>Cep:<strong>{cep?.cep}</strong></p>
                <p>Logradouro:<strong>{cep?.logradouro}</strong></p>
                <p>Bairro:<strong>{cep?.bairro}</strong></p>
                <p>Localidade:<strong>{cep?.localidade}</strong></p>
                <p>Estado:<strong>{cep?.uf}</strong></p>
            </div>
         )}
        </div>
      </div>
    </div>
  )
}

export default App
