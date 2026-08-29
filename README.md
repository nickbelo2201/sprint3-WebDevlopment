# MinhaGrana — Controle de Gastos Pessoais

Projeto da Sprint 3 da disciplina **Web Development** — FIAP, Engenharia de Software (Bacharelado), 2º semestre.

Migração de um protótipo estático para uma aplicação em **React**, com componentes funcionais organizados em estrutura pai → filho, persistência de dados via `localStorage` e uso de operações matemáticas (`Math`) para cálculos financeiros.

## Sobre o projeto

O MinhaGrana é uma aplicação simples de controle financeiro pessoal. Permite:

- Cadastrar lançamentos (receitas e despesas) com descrição, valor e categoria
- Ver o saldo atual, total de receitas, total de despesas, média por despesa, maior/menor despesa e percentual da receita já gasto
- Excluir um lançamento (ele vai para a lixeira) e restaurá-lo, ou excluí-lo definitivamente
- Receber uma dica financeira sorteada aleatoriamente
- Ter todos os dados salvos automaticamente no navegador (`localStorage`), sem precisar de backend

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) como bundler e servidor de desenvolvimento
- JavaScript (ES6+)
- CSS puro
- `localStorage` (Web Storage API)
- Deploy na [Vercel](https://vercel.com/)

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento:

```bash
npm run dev
```

O terminal vai mostrar o endereço local (geralmente `http://localhost:5173`). Abra no navegador.

Build de produção:

```bash
npm run build
npm run preview
```

## Usuários e senhas de teste

Este projeto **não possui autenticação/login** — todos os dados ficam salvos apenas no `localStorage` do próprio navegador de quem está usando, então não há usuários ou senhas necessários para testar.

## Uso de IA

## Link do Deploy na Vercel

https://minhagrana-tau.vercel.app

## Link do repositório

https://github.com/nickbelo2201/sprint3-WebDevlopment
