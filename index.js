import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new Conta(0, cliente1, 1001);
const conta2 = new Conta(50, cliente2, 1001);

conta1.depositar(100);
conta1.transferir(50, conta2);
console.log(conta1, Conta.numerodecontas);
