import { PessoaFisica } from '../../domain/PessoaFisica.js'

const formPessoa = document.querySelector('#formulario-pessoa')
const listaPessoas = document.querySelector('#lista-pessoas')
 
const historico = []

function registrarNovaPessoa(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const endereco = dadosDoForm.get('endereco')
    const telefone = dadosDoForm.get('telefone')

    const cpf = dadosDoForm.get('cpf')
    const dataNascimento = dadosDoForm.get('data')
    const nomeMae = dadosDoForm.get('nome-mae')
    const nomePai = dadosDoForm.get('nome-pai')
    const pis = dadosDoForm.get('pis')

    let data_nascimento = new Date(dataNascimento)

    const pessoaFisica = new PessoaFisica(nome, cpf, endereco, telefone, data_nascimento.toLocaleDateString('pt-br', { timeZone: 'UTC' }), nomeMae, nomePai, pis)
    pessoaFisica.nome = nome
    pessoaFisica.endereco = endereco
    pessoaFisica.telefone = telefone
    pessoaFisica.cpf = cpf

    pessoaFisica.dataNascimento = data_nascimento
    pessoaFisica.nomeMae = nomeMae
    pessoaFisica.nomePai = nomePai 
    pessoaFisica.pis = pis

    historico.push(pessoaFisica)

    console.log('HISTORICO', pessoaFisica.resumo())

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
      Telefone: ${pessoa.telefone}
      Nascimento: ${pessoa.dataNascimento}
      Nome mãe: ${pessoa.nomeMae}
      Nome pai: ${pessoa.nomePai}
      PIS: ${pessoa.pis}
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