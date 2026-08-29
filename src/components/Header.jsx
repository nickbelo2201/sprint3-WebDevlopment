import logo from '../assets/logo.svg'

function Header({ total }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <div className="marca">
          <img src={logo} alt="Logo JOVI Lens: uma câmera" className="logo" />
          <h1>JOVI Lens</h1>
        </div>
        <p className="subtitulo">Câmera contextual para estudantes: estudo, vida social e auto-expressão</p>
        <div className="contador">
          <span>Capturas guardadas</span>
          <strong>{total}</strong>
        </div>
      </div>
    </header>
  )
}

export default Header
