import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static quantidadeDeContas = 0;

    constructor(agencia, cliente){
        super(agencia, cliente, 0);
        ContaCorrente.quantidadeDeContas += 1;
    }

    sacar(valor){
        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}