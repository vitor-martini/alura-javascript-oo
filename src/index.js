import { Cliente } from "./class/Cliente.js"
import { ContaCorrente } from "./class/Conta/ContaCorrente.js"
import { ContaPoupanca } from "./class/Conta/ContaPoupanca.js";
import { Diretor } from "./class/Funcionario/Diretor.js"
import { Gerente } from "./class/Funcionario/Gerente.js"
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

// Definição dos funcionarios
console.log(`\n======================== Cadastro de funcionários e tentativa de login ======================== `);
const funcionario1 = new Diretor(`Vitor`, 58546197849, 10000);
funcionario1.cadastrarSenha(`973164`);
SistemaDeAutenticacao.login(funcionario1, `-1`);
SistemaDeAutenticacao.login(funcionario1, `973164`);

const funcionario2 = new Gerente(`João`, 28634851800, 5000);
funcionario2.cadastrarSenha(`316497`);
SistemaDeAutenticacao.login(funcionario2, `316497`);

// Definição dos clientes
console.log(`\n======================== Cadastro de clientes e tentativa de login ======================== `);
const cliente1 = new Cliente(`Bob`, 15752527830);
cliente1.cadastrarSenha(`649731`);
SistemaDeAutenticacao.login(cliente1, `-1`);
SistemaDeAutenticacao.login(cliente1, `649731`);

const cliente2 = new Cliente(`Alice`, 45648151802);
cliente2.cadastrarSenha(`467913`);
SistemaDeAutenticacao.login(cliente2, `467913`);

// Definição das contas correntes
const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(201, cliente2);

// Operações
console.log(`\n======================== Depósitos e testes iniciais na CC 1 ======================== `);
contaCorrente1.depositar(200.0);
contaCorrente1.depositar(-5);
contaCorrente1.sacar(300.0);
contaCorrente1.sacar(100.0);

console.log(`\n======================== Transferência da conta 1 para a CC 2 ======================== `);
contaCorrente1.transferir(500.0, contaCorrente2);
contaCorrente1.transferir(70.0, contaCorrente2);

// Definição das contas poupanças
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 50.0);
contaPoupanca1.sacar(10);

console.log(`\n======================== Dados das CC ======================== `);
console.log(`Quantidade de CCs: `, ContaCorrente.quantidadeDeContas);
console.log(`Agência: ${contaCorrente1.agencia} - Saldo (R$): ${contaCorrente1.saldo} - Cliente: ${contaCorrente1.cliente.nome} - CPF: ${contaCorrente1.cliente.cpf}`);
console.log(`Agência: ${contaCorrente2.agencia} - Saldo (R$): ${contaCorrente2.saldo} - Cliente: ${contaCorrente2.cliente.nome} - CPF: ${contaCorrente2.cliente.cpf}`);

console.log(`\n======================== Dados das Contas Poupanças ======================== `);
console.log(`Quantidade de Contas Poupanças: `, ContaPoupanca.quantidadeDeContas);
console.log(`Agência: ${contaPoupanca1.agencia} - Saldo (R$): ${contaPoupanca1.saldo} - Cliente: ${contaPoupanca1.cliente.nome} - CPF: ${contaPoupanca1.cliente.cpf}`);

console.log(`\n`);