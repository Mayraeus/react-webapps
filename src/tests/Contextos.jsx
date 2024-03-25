import React from 'react'
import Navbar from '../../components/Navbar'
import ComponenteA from '../components/ComponenteA'
import componenteB from '../../components/ComponenteB'
import { ComponentesProvider, ComponentesContext } from '../../context/ComponentesContext'
import Boton from '../../components/Boton'



export default function Contextos() {
    return (
        <div>
            <Navbar />
            <div className="container">
                        <ComponentesProvider>
                <div className="row">
                    <Boton/>
                    <div className='row mt-2'>
                            <div className="col-6">
                                <componenteA />
                            </div>
                            <div className="col-6">
                                <componeteB />
                            </div>
                    </div>
                </div>
                        </ComponentesProvider>
            </div>
        </div>
    )
}

