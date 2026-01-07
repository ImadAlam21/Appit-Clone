import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Header/Header'
import MainPage from './components/Pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import WaitList from './components/Pages/Waitlist'


function App() {

  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/waitlist" element={<WaitList />} />
      </Routes>
    </>
  )
}

export default App
