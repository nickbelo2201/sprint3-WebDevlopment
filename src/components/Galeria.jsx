import { useState } from 'react'
import modos from '../data/modos'
import CapturaItem from './CapturaItem'

function Galeria({ capturas, albuns, onExcluir, onMoverAlbum }) {
  const [busca, setBusca] = useState('')

  const recentesIds = new Set(capturas.slice(0, 3).map((c) => c.id))

  const termo = busca.trim().toLowerCase()
  const filtradas = termo
    ? capturas.filter((c) => {
        const nomeModo = modos.find((m) => m.id === c.modo)?.nome ?? c.modo
        const nomeAlbum = albuns.find((a) => a.id === c.albumId)?.nome ?? ''
        return (
          nomeModo.toLowerCase().includes(termo) ||
          nomeAlbum.toLowerCase().includes(termo) ||
          c.origem.toLowerCase().includes(termo)
        )
      })
    : capturas

  return (
    <section className="cartao galeria">
      <h2>Central de conteúdo ({capturas.length})</h2>

      <input
        type="search"
        placeholder="Buscar por modo, álbum ou origem..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="galeria-busca"
      />

      {capturas.length === 0 ? (
        <p className="vazio">Nenhuma captura ainda. Tire a primeira foto ao lado.</p>
      ) : filtradas.length === 0 ? (
        <p className="vazio">Nenhuma captura encontrada para "{busca}".</p>
      ) : (
        <ul className="galeria-grid">
          {filtradas.map((captura) => (
            <CapturaItem
              key={captura.id}
              captura={captura}
              albuns={albuns}
              onExcluir={onExcluir}
              onMoverAlbum={onMoverAlbum}
              destaque={recentesIds.has(captura.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Galeria
