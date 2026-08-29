import modos from '../data/modos'

function Estatisticas({ capturas }) {
  const total = capturas.length

  const contagemPorModo = modos.map((modo) => ({
    ...modo,
    quantidade: capturas.filter((c) => c.modo === modo.id).length,
  }))

  const modoMaisUsado = contagemPorModo.reduce(
    (maior, atual) => (atual.quantidade > maior.quantidade ? atual : maior),
    contagemPorModo[0],
  )

  const diasDistintos = new Set(capturas.map((c) => new Date(c.data).toLocaleDateString('pt-BR'))).size
  const mediaPorDia = diasDistintos > 0 ? Math.round((total / diasDistintos) * 10) / 10 : 0

  const espacoKb = Math.round(capturas.reduce((soma, c) => soma + c.imagem.length, 0) / 1024)

  return (
    <section className="cartao estatisticas">
      <h2>Estatísticas</h2>
      <div className="estatisticas-grid">
        <div className="estatistica-item">
          <span>Total de capturas</span>
          <strong>{total}</strong>
        </div>
        <div className="estatistica-item">
          <span>Modo mais usado</span>
          <strong>{total > 0 ? modoMaisUsado.nome : '—'}</strong>
        </div>
        <div className="estatistica-item">
          <span>Média por dia</span>
          <strong>{mediaPorDia}</strong>
        </div>
        <div className="estatistica-item">
          <span>Espaço usado</span>
          <strong>{espacoKb} KB</strong>
        </div>
      </div>

      <div className="estatisticas-barras">
        {contagemPorModo.map((modo) => {
          const percentual = total > 0 ? Math.round((modo.quantidade / total) * 100) : 0
          return (
            <div key={modo.id} className="estatistica-linha">
              <span>{modo.nome}</span>
              <div className="barra">
                <div
                  className="barra-preenchida"
                  style={{ width: `${percentual}%`, '--cor-modo': modo.cor }}
                />
              </div>
              <span>{percentual}%</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Estatisticas
