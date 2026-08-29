import modos from '../data/modos'

function CapturaItem({ captura, albuns, onExcluir, onMoverAlbum, destaque }) {
  const modoInfo = modos.find((m) => m.id === captura.modo)
  const dataFormatada = new Date(captura.data).toLocaleString('pt-BR')

  return (
    <li className={`captura-item ${destaque ? 'captura-destaque' : ''}`}>
      <img src={captura.imagem} alt={`Captura no modo ${modoInfo?.nome ?? captura.modo}`} />
      <div className="captura-item-info">
        <span className="captura-badge" style={{ '--cor-modo': modoInfo?.cor }}>
          {modoInfo?.nome ?? captura.modo}
        </span>
        <span className="captura-data">{dataFormatada}</span>
      </div>
      <div className="captura-item-acoes">
        <select
          value={captura.albumId ?? ''}
          onChange={(e) => onMoverAlbum(captura.id, e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Sem álbum</option>
          {albuns.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nome}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => onExcluir(captura.id)} title="Excluir">
          ✕
        </button>
      </div>
    </li>
  )
}

export default CapturaItem
