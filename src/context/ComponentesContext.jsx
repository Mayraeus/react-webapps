//los contextos llevan doble llave 
import React from 'react'
import {useState} from 'react'
import { createContext } from 'react'

const ComponentesContext = createContext()

function ComponentesProvider({Children}) {

    const [informacion, setInformacion] = useState('')

  return (
    <ComponentesContext.Provider value={{informacion, setInformacion}}>
        {Children}
    </ComponentesContext.Provider>
  )
}

export {ComponentesContext, ComponentesProvider}

//estados para alamcenar 
//efectos cuando cambia el estado 