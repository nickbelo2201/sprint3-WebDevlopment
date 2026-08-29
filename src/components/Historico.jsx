const rotulos = {
  adicionado: 'Adicionado',
  editado: 'Editado',
  removido: 'Removido',
  restaurado: 'Restaurado',
}

function Historico({ historico }) {
  return (
    <section className="cartao historico">
      <h2>Histórico de ações</h2>
      {historico.length === 0 ? (
        <p className="vazio">Nenhuma ação registrada ainda.</p>
      ) : (
        <ul>
          {historico.slice(0, 10).map((item) => (
            <li key={item.id} className={`historico-item historico-${item.acao}`}>
              <span className="historico-acao">{rotulos[item.acao] ?? item.acao}</span>
              <span className="historico-descricao">{item.descricao}</span>
              <span className="historico-data">{new Date(item.data).toLocaleString('pt-BR')}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Historico
