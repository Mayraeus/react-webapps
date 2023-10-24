
import React from 'react'
import Navbar from '../components/Navbar'

export default function Storage() {

    const agregar = (e) =>{
        localStorage.setItem('nombre', 'Mayra ')
        localStorage.setItem('apellido', 'Eusebio')
    }

    const consultar = (e) =>{
        let nombre = localStorage.getItem('nombre')
        let apellido = localStorage.getItem('apellido')
        alert(nombre+''+ apellido)
    }

    const eliminar = (e) =>{
        localStorage.removeItem('nombre')
        localStorage.removeItem('apellido')
    }

    const limpiar = (e) =>{
        localStorage.clear()
    }

    const actualizar = (e) =>{
        localStorage.()
    }
    

  return (
    <div>
        <div className="container">
            <button onClick={agregar} className='btn btn-info'>Agregar informacion</button>
            <button onClick={consultar} className='btn btn-info'>Consultar informacion</button>
            <button onClick={eliminar} className='btn btn-info'>Eliminar informacion</button>
            <button onClick={limpiar} className='btn btn-info'>Limpiar informacion</button>
            <button onClick={actualizar} className='btn btn-info'>Actualizar informacion</button>
        </div>
    </div>
  )
}
