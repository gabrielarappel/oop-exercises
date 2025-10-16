import { UnidadeFederativa } from "./UnidadeFederativa";

export class Endereco {
    protected logradouro: String;
    protected numero: String;
    protected complemento: String;
    protected cep: String;
    protected cidade: String;
    protected uf: UnidadeFederativa;

    constructor(logradouro: String, numero: String, complemento: String, cep: String, cidade: String, uf: UnidadeFederativa) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }

    public toString(): string {
        return `Logradouro: ${this.logradouro}, Numero: ${this.numero}, Complemento: ${this.complemento}, cep: ${this.cep}, cidade: ${this.cidade}, UF: ${this.uf}`;
    }
}