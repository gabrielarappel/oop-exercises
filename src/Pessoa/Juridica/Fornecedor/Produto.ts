import { Fornecedor } from "./Fornecedor";
import { Endereco } from "../../Endereco/endereco";
import { Setor } from "./Setor";

export class Produto extends Fornecedor {
    protected nomeProduto: String;
    protected categoria: String;
    protected preco: Number;

     constructor(nome: String, telefone: String, email: String, endereco: Endereco, cnpj: String, inscricaoEstadual: String, setor: Setor, produto: Produto, nomeProduto: String, categoria: String, preco: Number) {
                super(nome, telefone, email, endereco, cnpj, inscricaoEstadual, setor, produto);
                this.nomeProduto = nomeProduto;
                this.categoria = categoria;
                this.preco = preco;
            }

        public toString(): string {
            return `Nome: ${this.nome}, 
            Telefone: ${this.telefone}, 
            Email: ${this.email}, 
            Endereco: ${this.endereco}, 
            CNPJ: ${this.cnpj}, 
            Inscrição Estadual: ${this.inscricaoEstadual},
            Setor: ${this.setor},
            Produto: ${this.produto},
            Nome do Produto: ${this.nomeProduto},
            Categoria: ${this.categoria},
            Preço: ${this.preco}`;
    }
}