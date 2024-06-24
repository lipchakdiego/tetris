import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Game from './components/Game/Game'
import Help from './components/Help/Help'


function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
