import { useState } from 'react'
import dicas from '../data/dicas'

function sortear() {
  return dicas[Math.floor(Math.random() * dicas.length)]
}

function DicaFinanceira() {
  const [dica, setDica] = useState(sortear)

  return (
    <section className="dica">
      <h2>Dica do dia</h2>
      <p>{dica}</p>
      <button onClick={() => setDica(sortear())}>Nova dica</button>
    </section>
  )
}

export default DicaFinanceira
