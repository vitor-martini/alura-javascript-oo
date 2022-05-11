export class Funcionario{
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}