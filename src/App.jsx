import { useState, useContext, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
/* import MainBody from './components/layout/MainBody' */
import SidebarNav from './components/layout/SidebarNav'
import Sidebar from './components/layout/Sidebar'

//componentes de paginas principales, 1 por cada ruta
//se crean en la carpeta pages
import MainPageUno from './pages/MainPageUno'
import MainPageDos from './pages/MainPageDos'
import MainPageTres from './pages/MainPageTres'

import './App.css'

//Creamos un contexto para los datos, este se debe exportar 
export const UserContext = createContext()
export const SetUserContext = createContext()
function App() {
  /* const [count, setCount] = useState(0) */
  //const estadoInicial = {usuario: "default User"}
  
  const [nombreUser, setNombreUser] = useState({ usuario: "default User"})

  return (
    <>
      <Header/>
      <Container>
        <SidebarNav/>

        <SetUserContext.Provider value={setNombreUser}>  
          <UserContext.Provider value={nombreUser}>
            <Routes>
              <Route path="/" element={<MainPageUno/>} />  
              <Route path='/maindos' element={<MainPageDos/>}/>  
              <Route path='/maintres' element={<MainPageTres/>}/>  
            </Routes>
          </UserContext.Provider>  
        </SetUserContext.Provider>

        <Sidebar/>
      </Container>
    </>
  )
}

export default App
