function formatar(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

function Summary({ transactions }) {
  const receitas = transactions.filter((t) => t.tipo === 'receita')
  const despesas = transactions.filter((t) => t.tipo === 'despesa')

  const totalReceitas = receitas.reduce((soma, t) => soma + t.valor, 0)
  const totalDespesas = despesas.reduce((soma, t) => soma + t.valor, 0)
  const saldo = totalReceitas - totalDespesas

  const percentualGasto = totalReceitas > 0 ? Math.round((totalDespesas / totalReceitas) * 100) : 0

  const mediaDespesa = despesas.length > 0 ? totalDespesas / despesas.length : 0

  const maiorDespesa = despesas.length > 0 ? Math.max(...despesas.map((t) => t.valor)) : 0
  const menorDespesa = despesas.length > 0 ? Math.min(...despesas.map((t) => t.valor)) : 0

  return (
    <section className="resumo">
      <h2>Resumo</h2>
      <div className="resumo-grid">
        <div className="resumo-item">
          <span>Receitas</span>
          <strong className="cor-receita">{formatar(totalReceitas)}</strong>
        </div>
        <div className="resumo-item">
          <span>Despesas</span>
          <strong className="cor-despesa">{formatar(totalDespesas)}</strong>
        </div>
        <div className="resumo-item">
          <span>Saldo</span>
          <strong>{formatar(saldo)}</strong>
        </div>
        <div className="resumo-item">
          <span>% da receita gasta</span>
          <strong>{percentualGasto}%</strong>
        </div>
        <div className="resumo-item">
          <span>Média por despesa</span>
          <strong>{formatar(mediaDespesa)}</strong>
        </div>
        <div className="resumo-item">
          <span>Maior / menor despesa</span>
          <strong>
            {formatar(maiorDespesa)} / {formatar(menorDespesa)}
          </strong>
        </div>
      </div>
    </section>
  )
}

export default Summary
