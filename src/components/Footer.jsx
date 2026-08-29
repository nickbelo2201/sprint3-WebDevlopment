const equipe = [
  { nome: 'Nicholas Belo', rm: 'RM571063' },
  { nome: 'Leonardo Ursini', rm: 'RM569812' },
  { nome: 'Gustavo Braga', rm: 'RM569211' },
  { nome: 'Henry Gabriel', rm: 'RM570063' },
  { nome: 'Matheus Carvalho', rm: 'RM569454' },
]

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <p>JOVI Lens &copy; {ano} — projeto de Web Development</p>
      <ul className="rodape-equipe">
        {equipe.map((integrante) => (
          <li key={integrante.rm}>
            {integrante.nome} — {integrante.rm}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
