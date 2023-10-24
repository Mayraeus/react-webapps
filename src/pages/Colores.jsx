import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Colores() {
  const [color, setColor] = useState('#FFFFFF')

  const CambiarColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div style={{ backgroundColor: color}}>

      <Navbar />
      
      <div className='text-center'>
        <h1>Colores</h1>
        <h1>{color}</h1>
      </div>

      <div className='container-fluid' />
      <div className='centro'>
        <input type='color' value={color} onChange={CambiarColor}></input></div>
    </div>
  )
}
