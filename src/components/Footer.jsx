function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <p>MinhaGrana &copy; {ano} — projeto de Web Development</p>
      <p>Nicholas Belo — RM571063</p>
    </footer>
  )
}

export default Footer
