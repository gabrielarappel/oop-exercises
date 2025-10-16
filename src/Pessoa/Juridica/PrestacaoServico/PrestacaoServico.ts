import { Juridica } from "../Juridica";
import { Endereco } from "../../Endereco/endereco";

class PrestacaoServico extends Juridica {
    protected contratoInicio: Date;
    protected contratoFim: Date;

    constructor(nome: String, telefone: String, email: String, endereco: Endereco, cnpj: String, inscricaoEstadual: String, contratoInicio: Date, contratoFim: Date) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
        this.contratoInicio = contratoInicio;
        this.contratoFim = contratoFim;
    }

    public toString(): string {
        return `Nome: ${this.nome}, 
        Telefone: ${this.telefone}, 
        Email: ${this.email}, 
        Endereco: ${this.endereco}, 
        CNPJ: ${this.cnpj}, 
        Inscrição Estadual: ${this.inscricaoEstadual},
        Inicio do contrato: ${this.contratoInicio},
        Fim do contrato: ${this.contratoFim}`;

    }
}