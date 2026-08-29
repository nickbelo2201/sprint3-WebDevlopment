import { useState } from 'react'

function Albuns({ albuns, capturas, onCriar }) {
  const [nome, setNome] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim()) return
    onCriar(nome.trim())
    setNome('')
  }

  return (
    <section className="cartao albuns">
      <h2>Álbuns</h2>

      <form onSubmit={handleSubmit} className="album-form">
        <input
          type="text"
          placeholder="Nome do novo álbum (ex: Trabalho de Bio)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Criar</button>
      </form>

      {albuns.length === 0 ? (
        <p className="vazio">Nenhum álbum criado ainda. Organize suas capturas em álbuns.</p>
      ) : (
        <ul className="album-lista">
          {albuns.map((album) => {
            const quantidade = capturas.filter((c) => c.albumId === album.id).length
            return (
              <li key={album.id} className="album-pill" style={{ '--cor-album': album.cor }}>
                {album.nome} <span>({quantidade})</span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default Albuns
