import { Endereco } from "../../Endereco/endereco";
import { EstadoCivil } from "../EstadoCivil";
import { Genero } from "../Genero";
import { Funcionario } from "./Funcionario";
import { SetorFuncionario } from "./SetorFunc";


class Motoboy extends Funcionario {
    protected carteiraDeHabilitacao: String;

    constructor(
            nome: String,
            telefone: String,
            email: String,
            endereco: Endereco,
            genero: Genero,
            estadoCivil: EstadoCivil,
            dataNascimento: Date,
            cpf: String,
            rg: String,
            matricula: String,
            setor: SetorFuncionario,
            salario: Number,
            carteiraDeHabilitacao: String
        ) {
            super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario)
            this.carteiraDeHabilitacao = carteiraDeHabilitacao;
        }
            
        public toString(): string {
            return `${super.toString()}
        carteiraDeHabilitacao: ${this.carteiraDeHabilitacao}`;
  }
}