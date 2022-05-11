export class Cliente{
    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}