import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SugestaoModo from './components/SugestaoModo'
import Captura from './components/Captura'
import Estatisticas from './components/Estatisticas'
import Galeria from './components/Galeria'
import Albuns from './components/Albuns'
import { carregar, salvar } from './utils/storage'
import './App.css'

function novoId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

function App() {
  const [capturas, setCapturas] = useState(() => carregar('capturas', []))
  const [albuns, setAlbuns] = useState(() => carregar('albuns', []))
  const [lixeira, setLixeira] = useState(() => carregar('lixeira_capturas', []))
  const [historico, setHistorico] = useState(() => carregar('historico', []))

  useEffect(() => salvar('capturas', capturas), [capturas])
  useEffect(() => salvar('albuns', albuns), [albuns])
  useEffect(() => salvar('lixeira_capturas', lixeira), [lixeira])
  useEffect(() => salvar('historico', historico), [historico])

  function registrarHistorico(acao, descricao) {
    setHistorico((atual) =>
      [{ id: novoId(), acao, descricao, data: new Date().toISOString() }, ...atual].slice(0, 50),
    )
  }

  function adicionarCaptura({ imagem, modo, origem }) {
    const captura = {
      id: novoId(),
      imagem,
      modo,
      origem,
      albumId: null,
      data: new Date().toISOString(),
    }
    setCapturas((atual) => [captura, ...atual])
    registrarHistorico('adicionado', `Nova captura no modo ${modo} (${origem === 'camera' ? 'câmera' : 'simulada'})`)
  }

  function moverParaAlbum(id, albumId) {
    setCapturas((atual) => atual.map((c) => (c.id === id ? { ...c, albumId } : c)))
    registrarHistorico('editado', 'Captura movida para outro álbum')
  }

  function excluirCaptura(id) {
    const item = capturas.find((c) => c.id === id)
    if (!item) return
    setCapturas((atual) => atual.filter((c) => c.id !== id))
    setLixeira((atual) => [item, ...atual])
    registrarHistorico('removido', 'Captura enviada para a lixeira')
  }

  function restaurarCaptura(id) {
    const item = lixeira.find((c) => c.id === id)
    if (!item) return
    setLixeira((atual) => atual.filter((c) => c.id !== id))
    setCapturas((atual) => [item, ...atual])
    registrarHistorico('restaurado', 'Captura restaurada da lixeira')
  }

  function excluirDefinitivo(id) {
    setLixeira((atual) => atual.filter((c) => c.id !== id))
  }

  function criarAlbum(nome) {
    const cor = `hsl(${Math.floor(Math.random() * 360)}, 65%, 55%)`
    setAlbuns((atual) => [...atual, { id: novoId(), nome, cor }])
    registrarHistorico('adicionado', `Álbum "${nome}" criado`)
  }

  return (
    <>
      <Header total={capturas.length} />
      <main className="conteudo">
        <div className="coluna">
          <SugestaoModo />
          <Captura onCapturar={adicionarCaptura} />
          <Estatisticas capturas={capturas} />
        </div>
        <div className="coluna">
          <Galeria
            capturas={capturas}
            albuns={albuns}
            onExcluir={excluirCaptura}
            onMoverAlbum={moverParaAlbum}
          />
          <Albuns albuns={albuns} capturas={capturas} onCriar={criarAlbum} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
