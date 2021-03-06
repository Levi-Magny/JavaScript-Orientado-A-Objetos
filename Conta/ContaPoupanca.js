import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{ // a classe ContaPoupanca herda a classe Conta
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);// "super()" chama o construtor da classe 'pai'
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}