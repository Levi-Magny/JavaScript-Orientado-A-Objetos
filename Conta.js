export class Conta {

    constructor(saldoInicial, cliente, agencia){
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
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
        let taxa = 1;
        this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = valor *= taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        console.log("Saldo indisponivel.");
        return 0;
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