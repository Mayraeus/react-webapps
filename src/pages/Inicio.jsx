import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


export default function Inicio() {
    return (
        <>
            <Navbar />
            <div className="conteiner">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <Link to='/colores'>
                                    <div className='center text-center'>
                                        Colores
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <Link to='/caracteres'>
                                    <div className='center text-center'>
                                        Contador de caracteres
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <Link to='/calculadora'>
                                    <div className='center text-center'>
                                        Calculadora
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <Link to='/reloj'>
                                    <div className='center text-center'>
                                        Reloj
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <Link to='/appclima'>
                                    <div className='center text-center'>
                                        Clima API
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



