import { useContext } from 'react'
import { ComponentesContext } from '../context/ComponentesContext'

export default function Boton() {
    const {setInformacion} = useContext(ComponentesContext)
    return (
        <div>
            <div className='col-12'>
                <button onClick={e => setInformacion('')} className='btn btn-danger W-100'>Click</button>
            </div>
        </div>
    )
}
