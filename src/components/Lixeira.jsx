function Lixeira({ lixeira, onRestaurar, onExcluirDefinitivo }) {
  if (lixeira.length === 0) return null

  return (
    <section className="cartao lixeira">
      <h2>Lixeira ({lixeira.length})</h2>
      <ul className="lixeira-lista">
        {lixeira.map((item) => (
          <li key={item.id} className="lixeira-item">
            <img src={item.imagem} alt="Captura excluída" />
            <div className="lixeira-acoes">
              <button type="button" onClick={() => onRestaurar(item.id)}>
                Restaurar
              </button>
              <button type="button" onClick={() => onExcluirDefinitivo(item.id)}>
                Excluir definitivo
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Lixeira
