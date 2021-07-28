export class SistemaAutenticacao{
    /*
    comportamento polimórfico:
    Não importa qual o tipo de funcionário tente logar,
    desde que seja herde a classe generica "Funcionario".
    */
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
}