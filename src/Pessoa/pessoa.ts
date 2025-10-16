import {Endereco} from "./Endereco/endereco";

export abstract class Pessoa {
    public nome: String;
    public telefone: String;
    public email: String;
    public endereco: Endereco;

    constructor(nome: String, telefone: String, email: String, endereco: Endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this. email = email;
        this.endereco = endereco;
    }

    public toString(): string {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, endereço: ${this.endereco}`;
    }
}