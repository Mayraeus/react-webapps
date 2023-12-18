import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'

export default function Securitypass() {
  const [contrasena, setContrasena] = useState('')
  const [puntuacion, setPuntuacion] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  const [textoNivel, setTextoNivel] = useState('')
  const [nivel, setNivel] = useState(0)
  const [color, setColor] = useState('')

  const borrar = useRef()

  const agregar_contrasena = (e) => {
    setContrasena(e.target.value)
    const puntaje = e.target.value.length > 0 ? calcular_puntaje(e.target.value) : 0
    setPuntuacion(puntaje)

    if (puntaje >= 20) {
      setNivel(100)
      setTextoNivel('Nivel Alto')
      setColor('#5cb85c')
    } else if (puntaje >= 7 && puntaje < 20) {
      setNivel(66.66)
      setTextoNivel('Nivel Medio')
      setColor('#f0ad4e')
    } else if (puntaje >= 0 && puntaje < 7) {
      setNivel(33.33)
      setTextoNivel('Nivel Bajo')
      setColor('#d9534f')
    } else {
      setNivel(0)
      setColor('#d9534f')
    }
  }

  const calcular_puntaje = (contrasena) => {
    let score = 0

    // Al menos 10 caracteres
    if (contrasena.length >= 10) {
      score = score + 2
    } else {
      score = score + 1
    }

    // Al menos una letra minúscula
    if (/(?=.*[a-z])/.test(contrasena)){
      score = score + 1
    }
    // Al menos un número
    if (/\d/.test(contrasena)){
      score = score + 1
    }
    // Al menos una letra mayúscula y una letra minúscula
    if (/(?=.*[a-z])(?=.*[A-Z])/.test(contrasena)){
      score = score + 4
    }
    // Letras mayusculas y minusculas
    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(contrasena)){
      score = score + 4
    }
    // Caracteres especiales y numeros
    if (/^(?=(?:.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-]){1,})(?=.*\d).*$/.test(contrasena)){
      score = score + 2
    }
    // Al menos un carácter especial
    if (/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(contrasena)){

      score = score + 2
    }
    // Letras minusculas, mayusculas y numeros
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./-=]).+$/.test(contrasena)) {
      score = score + 5
    }
    // Solo caracteres especiales
    if (/^[!@#$%^&*()_+\-=[\]{};':,.<>?/~]+$/.test(contrasena)){
      score = score + 13
    }
    // Caracteres con letras minusculas
    if (/^(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/.test(contrasena)){
      score = score + 3
    }
    // Caracteres con letras mayusculas
    if (/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/.test(contrasena)){
      score = score + 3
    }

    return score
  }
   
  const mostrar_contrasena = () => {
    setMostrar(!mostrar)
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Medidor de Seguridad de Contraseña {puntuacion}</h2>
        <div className="form-group">
          <label>Ingresa tu contraseña (mínimo 10 caracteres): </label>
          <div className="input-group">
            <input ref={borrar} type={mostrar ? 'text' : 'password'} className="form-control" value={contrasena} onChange={agregar_contrasena} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={mostrar_contrasena}>
                {mostrar ? <i className='bx bx-lock-open'></i> : <i className='bx bx-lock'></i>}
              </button>
              <button className='btn btn-outline-secondary' type="button" onClick={ e => {
                setContrasena('')
                borrar.current.focus() }}>
                Borrar
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div>
            <strong>Seguridad de la contraseña: {textoNivel}</strong>
          </div>
          <div className="progress" style={{ marginTop: '10px', height: '8px' }}>
            <div className="progress-bar" role="progressbar" style={{ width: nivel + '%', transition: 'width 0.5s', background: color}} aria-valuenow={puntuacion} aria-valuemin="0" aria-valuemax="5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}



