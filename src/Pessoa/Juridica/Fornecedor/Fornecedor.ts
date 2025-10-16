import { Juridica } from "../Juridica";
import { Endereco } from "../../Endereco/endereco";
import { Setor } from "./Setor";
import { Produto } from "./Produto";


export class Fornecedor extends Juridica {
    protected setor: Setor;
    protected produto: Produto;
    
     constructor(nome: String, telefone: String, email: String, endereco: Endereco, cnpj: String, inscricaoEstadual: String, setor: Setor, produto: Produto) {
            super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
            this.setor = setor;
            this.produto = produto
        }

        public toString(): string {
            return `Nome: ${this.nome}, 
            Telefone: ${this.telefone}, 
            Email: ${this.email}, 
            Endereco: ${this.endereco}, 
            CNPJ: ${this.cnpj}, 
            Inscrição Estadual: ${this.inscricaoEstadual},
            Setor: ${this.setor},
            Produto: ${this.produto}`;
    }
    
}