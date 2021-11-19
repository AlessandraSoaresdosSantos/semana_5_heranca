import { Pessoa } from "./Pessoa.js";

class PessoaFisica extends Pessoa {

    _cpf;

    constructor(nome,
        endereco,
        telefone,
        cpf,
        dataNascimento,
        nomeMae,
        nomePai,
        pis) {
        super(nome,
            endereco,
            telefone)
         if (cpf === undefined || cpf.length <= 0) {
             throw new Error(alert('Campo CPF é de preenchimento obrigatório'));
         }
         this._dataNascimento = dataNascimento
         this._nomeMae = nomeMae
         this._nomePai = nomePai
         this._pis = pis
    }

    set cpf(novo_cpf) {
        if (this._cpfIsValid(novo_cpf)) {
             this._cpf = novo_cpf
        } else {
            throw new Error(alert("CPF informado não é válido"));
        }
    }

    get cpf() {
        return this._cpf;
    }

    resumo() {
        return `${this._nome} 
        possui o CPF nr ${this._cpf},reside no endereço ${this._endereco}, 
        a sua data de nascimento é ${this._dataNascimento} e o número PIS é ${this._pis}`
    }

    _cpfIsValid(value) {
        return /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(value)
    }
}

export  {PessoaFisica}