const PREFIXO = 'minhagrana_'

export function carregar(chave, valorPadrao) {
  try {
    const dados = localStorage.getItem(PREFIXO + chave)
    return dados ? JSON.parse(dados) : valorPadrao
  } catch {
    return valorPadrao
  }
}

export function salvar(chave, valor) {
  localStorage.setItem(PREFIXO + chave, JSON.stringify(valor))
}
