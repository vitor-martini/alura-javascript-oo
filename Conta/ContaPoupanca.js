import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static quantidadeDeContas = 0;

    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial);
        ContaPoupanca.quantidadeDeContas += 1;
    }

    sacar(valor){
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}