import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectStatus from './components/Project/ProjectStatus'

const App = () => {
  return (
    <>
    <div className='bg-custom'><Navbar /></div>
    <ProjectStatus />
    </>
  )
}

export default App
