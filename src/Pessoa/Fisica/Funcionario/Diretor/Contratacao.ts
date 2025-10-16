import { Funcionario } from "../Funcionario";

export interface Contratacao {
    admitir(funcionario: Funcionario): void;
    demitir(funcionario: Funcionario): void;
}