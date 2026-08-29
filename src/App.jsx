import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [capturas] = useState([])

  return (
    <>
      <Header total={capturas.length} />
      <main className="conteudo"></main>
      <Footer />
    </>
  )
}

export default App
