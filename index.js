import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

// Definição dos clientes
const cliente1 = new Cliente(`Bob`, 15752527830);
const cliente2 = new Cliente(`Alice`, 45648151802);

// Definição das contas correntes
const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(201, cliente2);

// Operações
console.log(`======== Depósitos e testes iniciais na conta 1 ======== `);
contaCorrente1.depositar(100);
contaCorrente1.depositar(-5);
contaCorrente1.sacar(200);
contaCorrente1.sacar(50);
contaCorrente1.depositar(150);

console.log(`\n======== Transferência da conta 1 para a conta 2 ======== `);
contaCorrente1.transferir(500, contaCorrente2);
contaCorrente1.transferir(100, contaCorrente2);

console.log(`\n======== Dados das CC ======== `);
console.log(`Quantidade de contas: `, ContaCorrente.quantidadeDeContas);
console.log(`Agência: ${contaCorrente1.agencia} - Saldo (R$): ${contaCorrente1.saldo} - Cliente: ${contaCorrente1.cliente.nome} - CPF: ${contaCorrente1.cliente.cpf}`);
console.log(`Agência: ${contaCorrente2.agencia} - Saldo (R$): ${contaCorrente2.saldo} - Cliente: ${contaCorrente2.cliente.nome} - CPF: ${contaCorrente2.cliente.cpf}`);