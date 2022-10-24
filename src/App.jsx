import { useState } from 'react'
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


function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <Header/>
      <Container>
        <SidebarNav/>
          
        <Routes>
          <Route path="/" element={<MainPageUno/>} />  
          <Route path='/maindos' element={<MainPageDos/>}/>  
          <Route path='/maintres' element={<MainPageTres/>}/>  
        </Routes>

        <Sidebar/>
      </Container>
    </>
  )
}

export default App
