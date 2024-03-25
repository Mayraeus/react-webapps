import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Pruebas() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">

        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>

              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/colores"><i className='bx bx-palette'></i> Selector de colores</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/caracteres"><i className='bx bx-purchase-tag-alt'></i> Contador de caracteres</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/calculadora"><i className='bx bx-math'></i> Calculadora</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/reloj"> <i className='bx bx-timer'></i> Reloj en tiempo real</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/clima"><i className='bx bx-cloud'></i> Clima</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/generar"><i className='bx bx-key'></i> Password Generator</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/medidor"><i className='bx bx-search-alt'></i> Medidor de seguridad</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">
            Content area...
          </div>
        </div>
      </div>
    </>
  );
}
