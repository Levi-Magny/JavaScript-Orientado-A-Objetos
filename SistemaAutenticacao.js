export class SistemaAutenticacao{
    /*
    comportamento polimórfico:
    Não importa qual o tipo de funcionário tente logar,
    desde que seja herde a classe generica "Funcionario".

    - Duck type -
    "If it walks like a duck and it quacks like a duck, then it must be a duck",
        É muito comum em linguagens fracamente tipadas como o Javascript - a linguagem apenas se preocupa com 
        o comportamento do tipo, não com o tipo em si.
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