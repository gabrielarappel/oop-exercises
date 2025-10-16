import { Pessoa } from "../pessoa";
import { Endereco } from "../Endereco/endereco";

export abstract class Juridica extends Pessoa {
    protected cnpj: String;
    protected inscricaoEstadual: String;

    constructor(nome: String, telefone: String, email: String, endereco: Endereco, cnpj: String, inscricaoEstadual: String) {
        super(nome, telefone, email, endereco);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public toString(): string {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, Endereco: ${this.endereco}, CNPJ: ${this.cnpj}, Inscrição Estadual: ${this.inscricaoEstadual}`;
    }
}