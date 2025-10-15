abstract class Pessoa {
    public nome: string;
    public telefone: string;

    constructor(nome: string, telefone: string){
        this.nome = nome;
        this.telefone = telefone;
    }
}

class Fisica extends Pessoa {
    public cpf: string;
    public rg: string;
    public dataNascimento: Date;

    constructor(nome: string, telefone: string, cpf: string, rg: string, dataNascimento: Date){
        super(nome, telefone)
        this.cpf = cpf;
        this.rg = rg;
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

    public toString(): string {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, CPF: ${this.cpf}, RG: ${this.rg}, Data de Nascimento: ${this.dataNascimento.toLocaleDateString()}, Idade: ${this.getIdade()}`;
    }
}

class Juridica extends Pessoa {
    public cnpj: string;
    public inscricaoEstadual: string;

    constructor(nome: string, telefone: string, cnpj: string, inscricaoEstadual: string) {
        super(nome, telefone)
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public toString(): string {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, CNPJ: ${this.cnpj}, Inscrição Estadual: ${this.inscricaoEstadual}`;
    }
}

const pessoa = new Fisica("Gabriela", "71 984101111", "123.456.789-90", "2201265789", new Date("2003-05-30") )
const pjuridica = new Juridica("Teste", "71 999998888", "1234567890001", "123654")
console.log(pjuridica)
console.log(pessoa)
console.log(pessoa.getIdade())