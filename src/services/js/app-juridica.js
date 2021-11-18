import { PessoaJuridica } from '../../domain/PessoaJuridica.js'

const formPessoa = document.querySelector('#formulario-pessoa')
const listaPessoas = document.querySelector('#lista-pessoas')

const historico = []

function registrarNovaPessoa(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const endereco = dadosDoForm.get('endereco')
    const telefone = dadosDoForm.get('telefone')
    const cnpj = dadosDoForm.get('cnpj') 

    const pessoaJuridica = new PessoaJuridica(nome, endereco, telefone, cnpj)
    pessoaJuridica.nome = nome
    pessoaJuridica.endereco = endereco
    pessoaJuridica.telefone = telefone
    pessoaJuridica.cnpj = cnpj
   
    historico.push(pessoaJuridica)

    console.log('HISTORICO', pessoaJuridica.resumo())

    evento.target.reset()
    atualizarTela()
}

function atualizarTela() {
    listaPessoas.innerHTML = ''

    for (let pessoa of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${pessoa.nome}
      Telefone: ${pessoa.telefone}
      Endereço: ${pessoa.endereco}
      CNPJ: ${pessoa.cnpj}
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