  export class Pessoa {
   
      constructor(nome,
          endereco, 
          telefone) {  
          this._nome = nome
          this._endereco = endereco
          this._telefone = telefone    
      }

      resumo() {
          return `${this._nome} reside no endereço ${this._endereco}
          e o seu telefone é ${this._telefone}`
      }      
  }