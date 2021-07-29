export class SistemaAutenticacao{
    /*
    comportamento polimórfico:
    Não importa qual o tipo de funcionário tente logar,
    desde que seja herde a classe generica "Funcionario".
    */
    static login(autenticavel, senha){
        if(SistemaAutenticacao.e_autenticavel(autenticavel)){        
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static e_autenticavel(autenticavel){
        // Verifica se existe uma chave chamada "autenticar" no objeto e se ela é uma função.
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}