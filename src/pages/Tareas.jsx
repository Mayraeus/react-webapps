
import React, {useState, useRef} from 'react'
import Navbar from '../components/Navbar'
//map se usa para representar arreglos

export default function Tareas() {

    const lista = localStorage.getItem('tareas')

    const [tareas, setTareas] = useState(JSON.parse(lista) || [])
    const input = useRef()
    const borrar = useRef()

    const agregar_tarea = (e) => {
        let texto = input.current.value
        if(texto != '' ){
            setTareas([...tareas,texto])
            input.current.value = ''
            input.current.focus()
            localStorage.setItem('tareas', JSON.stringify([...tareas,texto]))
    }
}

const limpiar_tareas =(e) =>{
    localStorage.clear()
    setTareas([])
}

const eliminar_tarea = (e) =>{
    let lista = tareas.filter((tarea, index) =>{
        return index != e
    })
    setTareas(lista)
    localStorage.setItem('tareas', JSON.stringify(lista))
}

  return (
    <div>
        <Navbar />
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <input ref={input} type="text" placeholder="Nueva tarea :)" className="form-control"/>
                    <button onClick={agregar_tarea} className='btn btn-warning btn-md w-100 mt-3'>
                        <i className='bx bx-plus'></i> Agregar tarea 
                    </button>

                    <button onClick={limpiar_tareas} className='btn btn-danger btn-md w-100 mt-3'>  
                    <i className='bx bx-trash'></i> Limpiar tareas
                    </button>
                </div>
                <div className="col-9">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th className='w-25'>Editar</th>
                                <th className='w-25'>Eliminar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tareas.length == 0 ?
                            <tr>
                                <td className="text-center text-secondary" colSpan="3">No hay tareas</td>
                            </tr>
                            :
                            tareas.map((tarea, index) =>
                                <tr key={index}>
                                    <td>{tarea}</td>
                                    <td>
                                        <button className='btn btn-primary'>
                                            <i className='bx bx-pencil'></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={e => eliminar_tarea (index)} className='btn btn-danger'>
                                            <i className='bx bx-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
