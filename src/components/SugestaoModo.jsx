import { useState } from 'react'
import modos from '../data/modos'

function sugerir() {
  const modo = modos[Math.floor(Math.random() * modos.length)]
  const confianca = Math.round(60 + Math.random() * 35)
  return { modo, confianca }
}

function SugestaoModo() {
  const [sugestao, setSugestao] = useState(sugerir)

  return (
    <section className="cartao sugestao" style={{ '--cor-modo': sugestao.modo.cor }}>
      <h2>Sugestão inteligente</h2>
      <p className="sugestao-texto">
        A câmera identificou o contexto e sugere o modo{' '}
        <strong>{sugestao.modo.nome}</strong> — {sugestao.modo.descricao}
      </p>
      <div className="sugestao-confianca">
        <div className="barra">
          <div className="barra-preenchida" style={{ width: `${sugestao.confianca}%` }} />
        </div>
        <span>{sugestao.confianca}% de confiança</span>
      </div>
      <button type="button" onClick={() => setSugestao(sugerir())}>
        Nova sugestão
      </button>
    </section>
  )
}

export default SugestaoModo
