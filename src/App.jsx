import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import Trash from './components/Trash'
import './App.css'

function novoId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

function App() {
  const [transactions, setTransactions] = useState([])
  const [trash, setTrash] = useState([])

  function addTransaction(transacao) {
    setTransactions((atuais) => [
      { ...transacao, id: novoId(), data: new Date().toISOString() },
      ...atuais,
    ])
  }

  function softDelete(id) {
    const item = transactions.find((t) => t.id === id)
    if (!item) return
    setTransactions((atuais) => atuais.filter((t) => t.id !== id))
    setTrash((atuais) => [item, ...atuais])
  }

  function restore(id) {
    const item = trash.find((t) => t.id === id)
    if (!item) return
    setTrash((atuais) => atuais.filter((t) => t.id !== id))
    setTransactions((atuais) => [item, ...atuais])
  }

  function hardDelete(id) {
    setTrash((atuais) => atuais.filter((t) => t.id !== id))
  }

  const saldo = transactions.reduce((total, t) => {
    return t.tipo === 'receita' ? total + t.valor : total - t.valor
  }, 0)

  return (
    <>
      <Header saldo={saldo} />
      <main className="conteudo">
        <TransactionForm onAdicionar={addTransaction} />
        <Summary transactions={transactions} />
        <TransactionList transactions={transactions} onExcluir={softDelete} />
        <Trash trash={trash} onRestaurar={restore} onExcluirDefinitivo={hardDelete} />
      </main>
      <Footer />
    </>
  )
}

export default App
