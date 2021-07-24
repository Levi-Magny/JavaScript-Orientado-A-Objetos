export class Conta {
    // conta quantas vezes um construtor de contacorrente foi chamado.
    static numerodecontas = 0; // é uma variável acima da instância do objeto individutal

    constructor(saldoInicial, cliente, agencia){
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
        Conta.numerodecontas += 1;
    }

    get agencia(){
        return this._agencia;
    }
    get saldo(){
        return this._saldo;
    }
    get cliente(){
        return this._cliente;
    }
    set cliente(valor){
        this._cliente = valor;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        } else {
            console.log("Saldo indisponivel.")
        }
        return valor;
    }
    depositar(valor){
        if(valor <= 0){
            console.log("valor válido");
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }
}