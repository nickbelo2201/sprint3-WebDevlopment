import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TransactionForm from './components/TransactionForm'
import './App.css'

function novoId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

function App() {
  const [transactions, setTransactions] = useState([])

  function addTransaction(transacao) {
    setTransactions((atuais) => [
      { ...transacao, id: novoId(), data: new Date().toISOString() },
      ...atuais,
    ])
  }

  const saldo = transactions.reduce((total, t) => {
    return t.tipo === 'receita' ? total + t.valor : total - t.valor
  }, 0)

  return (
    <>
      <Header saldo={saldo} />
      <main className="conteudo">
        <TransactionForm onAdicionar={addTransaction} />
      </main>
      <Footer />
    </>
  )
}

export default App
