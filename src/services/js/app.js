import { Pessoa } from '../../domain/Pessoa.js'

const formPessoa = document.querySelector('#formulario-pessoa')
const listaPessoas = document.querySelector('#lista-pessoas')

const historico = []

function registrarNovaPessoa(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const cpf = dadosDoForm.get('cpf')
    const dataNascimento = dadosDoForm.get('data')
    const endereco = dadosDoForm.get('endereco')
    const nomeMae = dadosDoForm.get('nomeMae')
    const nomePai = dadosDoForm.get('nomePai')

    let data_nascimento = new Date(dataNascimento)

    const pessoa = new Pessoa(nome, cpf, endereco, data_nascimento.toLocaleDateString('pt-br', { timeZone: 'UTC' }), nomeMae, nomePai)
    pessoa.nome = nome
    pessoa.cpf = cpf
    pessoa.dataNascimento = dataNascimento
    pessoa.endereco = endereco

    historico.push(pessoa)

    console.log('HISTORICO', pessoa.resumo())

    evento.target.reset()
    atualizarTela()
}

function atualizarTela() {
    listaPessoas.innerHTML = ''

    for (let pessoa of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${pessoa.nome}
      CPF: ${pessoa.cpf}
      Endereço: ${pessoa.endereco}
    `

        listaPessoas.appendChild(item)
    }
}

formPessoa.addEventListener('submit', registrarNovaPessoa)

document.querySelector('#t-btn-limpar').addEventListener('click', () => {
    formPessoa.reset()

    for (let i = historico.length; i > 0; i--) {
        historico.pop()
    }

    atualizarTela()
})