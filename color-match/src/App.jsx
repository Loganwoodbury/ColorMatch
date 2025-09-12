import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router'
import HomePage from './pages/HomePage/HomePage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
