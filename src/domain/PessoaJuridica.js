import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{

    constructor(nome,
        endereco,
        telefone,
        cnpj) {
        super(nome,
            endereco,
            telefone)
        this.cnpj = cnpj
    }

    resumo() {
        return `${this._nome} tem a empresa ${this._nome} e
        possui o CNPJ nr ${this.cnpj}`
    }
}