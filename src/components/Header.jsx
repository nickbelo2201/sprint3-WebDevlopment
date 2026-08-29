function Header({ saldo }) {
  const negativo = saldo < 0
  const saldoFormatado = Math.abs(saldo).toFixed(2).replace('.', ',')

  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <h1>MinhaGrana</h1>
        <p className="subtitulo">Controle de gastos pessoais</p>
        <div className={`saldo ${negativo ? 'saldo-negativo' : 'saldo-positivo'}`}>
          <span>Saldo atual</span>
          <strong>
            {negativo ? '-' : ''}R$ {saldoFormatado}
          </strong>
        </div>
      </div>
    </header>
  )
}

export default Header
