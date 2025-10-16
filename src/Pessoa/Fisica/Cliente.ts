import { Fisica } from "./Fisica";
import { Endereco } from "../Endereco/endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";


class Cliente extends Fisica {
    protected protocoloAtendimento: Number;

    constructor(nome: String, telefone: String, email: String, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, protocoloAtedimento: Number) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento)
        this.protocoloAtendimento = protocoloAtedimento;
    }

    public toString(): string {
        return `Cliente:
        Nome: ${this.nome}
        Telefone: ${this.telefone}
        Email: ${this.email}
        Endereço: ${this.endereco.toString()}
        Gênero: ${this.genero}
        Estado Civil: ${this.estadoCivil}
        Data de Nascimento: ${this.dataNascimento.toLocaleDateString()}
        Protocolo de Atendimento: ${this.protocoloAtendimento}`;
    }
}