import { Setor } from "../../Juridica/Fornecedor/Setor";
import { Fisica } from "../Fisica";
import { Endereco } from "../../Endereco/endereco";
import { Genero } from "../Genero";
import { EstadoCivil } from "../EstadoCivil";
import { SetorFuncionario } from "./SetorFunc";

export abstract class Funcionario extends Fisica {
    protected cpf: String;
    protected rg: String;
    protected matricula: String;
    protected setor: SetorFuncionario;
    protected salario: Number;

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
        salario: Number
    ) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
        this.cpf = cpf;
        this.rg = rg;
        this.matricula = matricula;
        this.setor = setor;
        this.salario = salario;
    }

    public toString(): string {
        return `Funcionário:
        Nome: ${this.nome}
        Telefone: ${this.telefone}
        Email: ${this.email}
        Endereço: ${this.endereco.toString()}
        Gênero: ${this.genero}
        Estado Civil: ${this.estadoCivil}
        Data de Nascimento: ${this.dataNascimento.toLocaleDateString()}
        CPF: ${this.cpf}
        RG: ${this.rg}
        Matrícula: ${this.matricula}
        Setor: ${this.setor.toString()}
        Salário: R$ ${this.salario.toFixed(2)}`;
    }
}
