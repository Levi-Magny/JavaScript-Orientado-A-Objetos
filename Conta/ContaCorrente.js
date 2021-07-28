import { Conta } from "./Conta.js";

export class contaCorrente extends Conta{
    // conta quantas vezes um construtor de contacorrente foi chamado.
    static numerodecontas = 0; // é uma variável acima da instância do objeto individutal

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        contaCorrente.numerodecontas += 1;
    }

    //sobrescrevendo o comportamento da classe mãe
    sacar(valor){
        let taxa = 1.1;
        this._sacar(valor, taxa);
    }
}