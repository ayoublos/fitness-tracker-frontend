import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const API=import.meta.env.VITE_API_URL

function App() {
  
  useEffect(()=>{
    fetch(`${API}/workouts`).then(res=>res.json()).then(res=>
      console.log(res)
    )
  },[])

  return (
    <>
    
    </>
  )
}

export default App
