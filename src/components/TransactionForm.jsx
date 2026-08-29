import { useState } from 'react'

const categorias = ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Saúde', 'Educação', 'Outros']

function TransactionForm({ onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('despesa')
  const [categoria, setCategoria] = useState(categorias[0])

  function handleSubmit(evento) {
    evento.preventDefault()

    const valorNumerico = Number(valor)
    if (!descricao.trim() || !valorNumerico || valorNumerico <= 0) return

    onAdicionar({
      descricao: descricao.trim(),
      valor: Math.round(valorNumerico * 100) / 100,
      tipo,
      categoria,
    })

    setDescricao('')
    setValor('')
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Novo lançamento</h2>

      <label>
        Descrição
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Ex: Mercado, salário..."
        />
      </label>

      <label>
        Valor (R$)
        <input
          type="number"
          min="0"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="0,00"
        />
      </label>

      <label>
        Tipo
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>
      </label>

      <label>
        Categoria
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TransactionForm
