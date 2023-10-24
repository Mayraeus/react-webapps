import {useContext} from 'react'
import { ComponentesContext } from '../context/ComponentesContext'

export default function componenteB() {

  const {informacion, setInformacion} = useContext(ComponentesContext)

  const agregar = ( ) => {
    setInformacion('Informacion desde el componente B')
  }


  return (
    <div className='bg-warning'>
      <h1>Componente B</h1>
      <p>{informacion}</p>
      <button onClick={agregar} className='btn btn-success'>Agregar informacion</button>
    </div>
  )
}
