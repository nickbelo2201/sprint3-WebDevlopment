function TransactionItem({ transacao, onExcluir }) {
  const sinal = transacao.tipo === 'receita' ? '+' : '-'
  const dataFormatada = new Date(transacao.data).toLocaleDateString('pt-BR')

  return (
    <li className={`item item-${transacao.tipo}`}>
      <div className="item-info">
        <strong>{transacao.descricao}</strong>
        <span className="item-categoria">
          {transacao.categoria} • {dataFormatada}
        </span>
      </div>
      <div className="item-acoes">
        <span className="item-valor">
          {sinal} R$ {transacao.valor.toFixed(2).replace('.', ',')}
        </span>
        <button onClick={() => onExcluir(transacao.id)} title="Excluir">
          ✕
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
