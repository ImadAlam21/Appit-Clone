import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Header/Header'
import MainPage from './components/Pages/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <MainPage />
    </>
  )
}

export default App
