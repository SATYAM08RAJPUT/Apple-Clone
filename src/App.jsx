import { useState, useEffect } from 'react'
import './App.css'
import Iphone from './iPhone/Iphone';
import Support from './Comm-Components/support/supportCom';
import Home from './Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path='/Iphone' element={<Iphone />}/>
        <Route path='/Support' element={<Support />}/>
      </Routes>
    </Router>
  )
}

export default App
