import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SugestaoModo from './components/SugestaoModo'
import './App.css'

function App() {
  const [capturas] = useState([])

  return (
    <>
      <Header total={capturas.length} />
      <main className="conteudo">
        <div className="coluna">
          <SugestaoModo />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
