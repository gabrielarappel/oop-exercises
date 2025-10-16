import { Endereco } from "../../../Endereco/endereco";
import { EstadoCivil } from "../../EstadoCivil";
import { Genero } from "../../Genero";
import { Funcionario } from "../Funcionario";
import { SetorFuncionario } from "../SetorFunc";


class Diretor extends Funcionario {
    protected premio: number;

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
            premio: Number
        ) {
            super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario)
            this.premio = 0.2;
        }
            
        public toString(): string {
            return `${super.toString()}
        premio: ${this.premio}`;
  }
}