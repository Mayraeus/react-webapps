import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className='bx bx-home-alt-2'></i> Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/colores"><i className='bx bx-palette'></i> Selector de colores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/caracteres"><i className='bx bx-purchase-tag-alt'></i> Contador de caracteres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculadora"><i className='bx bx-math'></i> Calculadora</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reloj"> <i className='bx bx-timer'></i> Reloj en tiempo real</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/appclima"><i className='bx bx-cloud'></i> Clima</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tareas"><i className='bx bx-coffee'></i> To Do</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

