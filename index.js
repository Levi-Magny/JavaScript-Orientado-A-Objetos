import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123654")
const gerente = new Gerente("Peter", 5000, 12378945601);

const estaLogado = SistemaAutenticacao.login(diretor, "123654");

// console.log(estaLogado);

const cliente = new Cliente("Laís", 46578925814, "459");
const clienteLogado = SistemaAutenticacao.login(cliente, "459");

console.log(clienteLogado);