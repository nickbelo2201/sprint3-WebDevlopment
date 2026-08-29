function Trash({ trash, onRestaurar, onExcluirDefinitivo }) {
  if (trash.length === 0) return null

  return (
    <section className="lixeira">
      <h2>Lixeira ({trash.length})</h2>
      <ul>
        {trash.map((t) => (
          <li key={t.id} className="item-lixeira">
            <span>
              {t.descricao} — R$ {t.valor.toFixed(2).replace('.', ',')}
            </span>
            <div className="item-acoes">
              <button onClick={() => onRestaurar(t.id)}>Restaurar</button>
              <button onClick={() => onExcluirDefinitivo(t.id)}>Excluir definitivo</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Trash
