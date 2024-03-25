import React, { useState, useEffect, useRef } from 'react'

//las referencias se ocupan cuando quiero afectar a mas elementos. 

export default function Referencias() {


    const referencia1 = useRef()
    const referencia2 = useRef()
    const click = useRef()


    const AlDarClic = (event) => {
        //alert(referencia.current.value)
        //alert(referencia2.current.value)
        //console.log(referencia)
        //referencia.current.oninput = () => {
            //console.log(referencia.current.value)

            console.log(referencia1)
            referencia1.current.value = "12345"
            referencia2.current.value = "54321"
            click.current.click()
        }
    


    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <p>Contador</p>
                <input ref={referencia1} type="number" className="form-control" />
                <br />
                <input ref={referencia2} type="number" className="form-control" />
                <br />
                <button ref={click} className=" btn btn-danger" onClick={AlDarClic}>Incrementar</button>
                <h1></h1>
            </div>
        </div>
    )
}
