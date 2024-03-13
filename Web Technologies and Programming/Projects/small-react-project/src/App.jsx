// import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login11" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>  
    </>
  )
}

export default App
