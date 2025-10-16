import { Pessoa } from "../pessoa";
import { Endereco } from "../Endereco/endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";


export abstract class Fisica extends Pessoa {
    protected genero: Genero;
    protected estadoCivil: EstadoCivil;
    protected dataNascimento: Date;

    constructor(nome: String, telefone: String, email: String, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date) {
        super(nome, telefone, email, endereco);
        this.genero = genero;
        this.estadoCivil = estadoCivil;
        this.dataNascimento = dataNascimento;
    }

    public getIdade(): number {
    const hoje = new Date();
    const nascimento = this.dataNascimento; 
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
    }
}

