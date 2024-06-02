import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectStatus from './components/projectStatus/ProjectStatus'
import Device from './components/deviceStats/Device'
import Sessions from './components/session/Sessions'
import Events from './components/events/Events'

const App = () => {
  return (
    <>
    <div className='bg-custom'><Navbar /></div>
    <Events/>
    <Sessions />
    <Device />
    <ProjectStatus />
    </>
  )
}

export default App
