import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const saldo = 0

  return (
    <>
      <Header saldo={saldo} />
      <main className="conteudo"></main>
      <Footer />
    </>
  )
}

export default App
