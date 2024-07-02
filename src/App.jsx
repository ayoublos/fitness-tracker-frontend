import { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Error from './pages/Error'
import Show from './pages/Show'
import Index from './pages/Index'
import New from './pages/New'
// import NavBar from './component/NavBar'
const API=import.meta.env.VITE_API_URL

function App() {
  


  return (
    <div>
      <Router>
        {/* <NavBar/> */}
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/workouts' element={<Index/>}/>
            <Route path='/workout/:id' element={<Show/>}/>
            <Route path='/workout/:id/:edit' element={<Edit/>}/>
            <Route path='/workout/new' element={<New/>}/>
            {/* <Route path='*' element={<Error/>}/> */}
          
          </Routes>
        </main>
      </Router>
    </div>
  
  )
}

export default App
