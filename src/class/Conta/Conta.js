import { Cliente } from "../Cliente.js";
import { Mensagem } from "../../ENUM.js";

//Classe Abstrata
export class Conta{
    _cliente;
    _saldo;
    constructor(agencia, cliente, saldo){        
        if(this.constructor == Conta)
            throw new Error("Você não deveria criar um objeto do tipo CONTA.");

        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this._cliente = novoCliente;     
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(Mensagem.POSITIVA + ` Novo saldo: R$ ${this._saldo}.`);
        } else console.log(Mensagem.NEGATIVA + ` Valor inválido.`);
    }

    // Método abstrato
    sacar(){
        throw new Error("Não foi implementado o método sacar.");
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa; 
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log(Mensagem.POSITIVA + ` Novo saldo: R$ ${this._saldo}.`);
            return valorSacado;
        } else console.log(Mensagem.NEGATIVA + ` Saldo insuficiente.`);

        return 0;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}