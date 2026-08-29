import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onExcluir }) {
  return (
    <section className="lista">
      <h2>Lançamentos ({transactions.length})</h2>
      {transactions.length === 0 ? (
        <p className="vazio">Nenhum lançamento ainda. Adicione o primeiro ao lado.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <TransactionItem key={t.id} transacao={t} onExcluir={onExcluir} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TransactionList
