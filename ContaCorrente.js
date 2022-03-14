import { Cliente } from "./Cliente.js";
import { Mensagem } from "./ENUM.js";

export class ContaCorrente{
    static quantidadeDeContas = 0;
    agencia;

    #cliente;
    #saldo;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = 0;
        ContaCorrente.quantidadeDeContas += 1;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this.#cliente = novoCliente;     
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(Mensagem.POSITIVA + ` Novo saldo: R$ ${this.saldo}.`);
        } else console.log(Mensagem.NEGATIVA + ` Valor inválido.`);
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(Mensagem.POSITIVA + ` Novo saldo: R$ ${this.saldo}.`);
            return valor;
        } else console.log(Mensagem.NEGATIVA + ` Saldo insuficiente.`);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}