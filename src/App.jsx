import { useState } from 'react'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import MainBody from './components/layout/MainBody'
import SidebarNav from './components/layout/SidebarNav'
import Sidebar from './components/layout/Sidebar'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Container>
        <SidebarNav/>
        <MainBody/>
        <Sidebar/>
      </Container>
    </>
  )
}

export default App
