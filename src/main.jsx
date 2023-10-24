//Archivos

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Referencias from './pages/Referencias'
import Calculadora from './pages/Calculadora'
import Caracteres from './pages/Caracteres'
import ReactDOM from 'react-dom/client'
import Colores from './pages/Colores'
import Weather from './pages/Weather'
import Inicio from './pages/Inicio'
import Reloj from './pages/Reloj'
import React from 'react'
import Tareas from './pages/Tareas'

//CSS 

import './assets/css/calculadora.css'
import './assets/css/contador.css'
import './assets/css/general.css' 
import './assets/css/colores.css'
import './assets/css/reloj.css'
import './assets/css/clima.css'
import './assets/css/tarea.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-webapps/">
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/colores' element={<Colores />} />
      <Route path='/caracteres' element={<Caracteres />} />
      <Route path='/referencias' element={<Referencias />} />
      <Route path='/reloj' element={<Reloj />} />
      <Route path='/calculadora' element={<Calculadora />} />
      <Route path='/appclima' element={<Weather />} />
      <Route path='/tareas' element={<Tareas />} />
    </Routes>
  </BrowserRouter>,
)
