import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

export default function Reloj() {

  const [time, setTime] = useState(new Date());

  useEffect(() => { //muestra al componente, efectos secundarios 
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)  

    return () => clearInterval(intervalId)
  }, [])
  
  const hours = time.getHours().toString()
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds 
  = time.getSeconds().toString().padStart(2, '0') //rellena la cadena 

  return (
    <div>
      <Navbar />

      <div className="reloj">

        <div className="clock">
          {/*Evalua y concatena*/}
          <div className="time">{`${hours}:${minutes}:${seconds}`}</div> 
          <h1 className='fecha'>{new Date().toLocaleDateString('es', { weekday:"long", year:"numeric", month:"long", day:"numeric"})} </h1>
        </div>
      </div>

    </div>
  )
}
