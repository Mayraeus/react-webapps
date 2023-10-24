import {useContext} from 'react'
import { ComponentesContext } from '../context/ComponentesContext'

export default function componenteA() {
  const {informacion, setInformacion} = useContext(ComponentesContext)

  const agregar = ( ) => {
    setInformacion('Esto viene del componente A')
  }

  return (
    <div className='bg-primary'>
      <h1>Componente A</h1>
      <p>{informacion}</p>
      <button onClick={agregar} className='btn btn-success'>Agregar informacion</button>
    </div>
  )
}
