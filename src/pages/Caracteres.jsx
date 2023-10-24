import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

export default function Caracteres() {

  const [inputText, setText] = useState('')
  const [word, setWord] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const words = inputText.trim().split(/\s+/); //elimina espacios en blanco
    setWord(words.length);
    setChar(inputText.length)
  }, [inputText])

  const cambiante = (e) => {
    setText(e.target.value)
  };
  
  
  return (
    <>
      <Navbar />
      <div className="entrada" >
        <center>
        <h1>{word} {word == 1 ? 'Palabra' : 'Palabras'}</h1>
        <h1>{char} {char == 1 ? 'Carácter' : 'Caracteres'}</h1>
        </center>
      <br/>
        <textarea className='form-control' rows="4" cols="50" value={inputText} onChange={cambiante}/>
      </div>

    </>
  )
}

