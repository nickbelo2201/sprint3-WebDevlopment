import { useEffect, useRef, useState } from 'react'
import modos from '../data/modos'

function redimensionarDeVideo(video, largura = 480) {
  const proporcao = video.videoHeight / video.videoWidth || 0.75
  const altura = Math.round(largura * proporcao)
  const canvas = document.createElement('canvas')
  canvas.width = largura
  canvas.height = altura
  const contexto = canvas.getContext('2d')
  contexto.drawImage(video, 0, 0, largura, altura)
  return canvas.toDataURL('image/jpeg', 0.7)
}

function gerarPlaceholder(nomeModo) {
  const largura = 480
  const altura = 320
  const canvas = document.createElement('canvas')
  canvas.width = largura
  canvas.height = altura
  const contexto = canvas.getContext('2d')
  const matiz = Math.floor(Math.random() * 360)
  contexto.fillStyle = `hsl(${matiz}, 70%, 55%)`
  contexto.fillRect(0, 0, largura, altura)
  contexto.fillStyle = 'rgba(255, 255, 255, 0.9)'
  contexto.font = 'bold 22px sans-serif'
  contexto.fillText(`Captura simulada`, 24, altura / 2 - 16)
  contexto.font = '16px sans-serif'
  contexto.fillText(`Modo: ${nomeModo}`, 24, altura / 2 + 14)
  return canvas.toDataURL('image/jpeg', 0.75)
}

function Captura({ onCapturar }) {
  const videoRef = useRef(null)
  const [modo, setModo] = useState(modos[0].id)
  const [cameraDisponivel, setCameraDisponivel] = useState(false)
  const [erroCamera, setErroCamera] = useState(false)

  useEffect(() => {
    let streamAtual = null

    async function iniciarCamera() {
      try {
        streamAtual = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = streamAtual
          setCameraDisponivel(true)
        }
      } catch {
        setErroCamera(true)
      }
    }

    iniciarCamera()

    return () => {
      streamAtual?.getTracks().forEach((faixa) => faixa.stop())
    }
  }, [])

  function capturarDaCamera() {
    if (!videoRef.current) return
    const imagem = redimensionarDeVideo(videoRef.current)
    onCapturar({ imagem, modo, origem: 'camera' })
  }

  function capturarSimulada() {
    const nomeModo = modos.find((m) => m.id === modo)?.nome ?? modo
    const imagem = gerarPlaceholder(nomeModo)
    onCapturar({ imagem, modo, origem: 'simulado' })
  }

  return (
    <section className="cartao captura">
      <h2>Nova captura</h2>

      <div className="modos">
        {modos.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`modo-btn ${modo === m.id ? 'modo-ativo' : ''}`}
            style={{ '--cor-modo': m.cor }}
            onClick={() => setModo(m.id)}
          >
            {m.nome}
          </button>
        ))}
      </div>

      <div className="visor">
        <video ref={videoRef} autoPlay playsInline muted className={cameraDisponivel ? 'visor-ativo' : 'visor-oculto'} />
        {!cameraDisponivel && (
          <div className="visor-mensagem">
            {erroCamera
              ? 'Câmera não disponível ou permissão negada. Use "Simular captura".'
              : 'Iniciando câmera...'}
          </div>
        )}
      </div>

      <div className="captura-acoes">
        <button type="button" onClick={capturarDaCamera} disabled={!cameraDisponivel}>
          Tirar foto
        </button>
        <button type="button" className="secundario" onClick={capturarSimulada}>
          Simular captura
        </button>
      </div>
    </section>
  )
}

export default Captura
