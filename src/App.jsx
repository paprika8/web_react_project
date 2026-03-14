import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import General from './General.jsx'
import RoundedCard from './RoundedCard.jsx'
import AddTask from './AddTask.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
