import Header from './components/Header'
import './App.css'

function App() {
  const saldo = 0

  return (
    <>
      <Header saldo={saldo} />
      <main className="conteudo"></main>
    </>
  )
}

export default App
