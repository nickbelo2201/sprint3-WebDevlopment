function IconeSeta({ tipo }) {
  const receita = tipo === 'receita'

  return (
    <svg
      className="icone-seta"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {receita ? (
        <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

function TransactionItem({ transacao, onExcluir }) {
  const sinal = transacao.tipo === 'receita' ? '+' : '-'
  const dataFormatada = new Date(transacao.data).toLocaleDateString('pt-BR')

  return (
    <li className={`item item-${transacao.tipo}`}>
      <div className="item-info">
        <span className={`item-icone item-icone-${transacao.tipo}`}>
          <IconeSeta tipo={transacao.tipo} />
        </span>
        <div>
          <strong>{transacao.descricao}</strong>
          <span className="item-categoria">
            {transacao.categoria} • {dataFormatada}
          </span>
        </div>
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
