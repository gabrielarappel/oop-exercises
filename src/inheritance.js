var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    return Pessoa;
}());
var Fisica = /** @class */ (function (_super) {
    __extends(Fisica, _super);
    function Fisica(nome, telefone, cpf, rg, dataNascimento) {
        var _this = _super.call(this, nome, telefone) || this;
        _this.cpf = cpf;
        _this.rg = rg;
        _this.dataNascimento = dataNascimento;
        return _this;
    }
    Fisica.prototype.getIdade = function () {
        var hoje = new Date();
        var nascimento = this.dataNascimento;
        var idade = hoje.getFullYear() - nascimento.getFullYear();
        if (hoje.getMonth() < nascimento.getMonth() ||
            (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    };
    Fisica.prototype.toString = function () {
        return "Nome: ".concat(this.nome, ", Telefone: ").concat(this.telefone, ", CPF: ").concat(this.cpf, ", RG: ").concat(this.rg, ", Data de Nascimento: ").concat(this.dataNascimento.toLocaleDateString(), ", Idade: ").concat(this.getIdade());
    };
    return Fisica;
}(Pessoa));
var Juridica = /** @class */ (function (_super) {
    __extends(Juridica, _super);
    function Juridica(nome, telefone, cnpj, inscricaoEstadual) {
        var _this = _super.call(this, nome, telefone) || this;
        _this.cnpj = cnpj;
        _this.inscricaoEstadual = inscricaoEstadual;
        return _this;
    }
    Juridica.prototype.toString = function () {
        return "Nome: ".concat(this.nome, ", Telefone: ").concat(this.telefone, ", CNPJ: ").concat(this.cnpj, ", Inscri\u00E7\u00E3o Estadual: ").concat(this.inscricaoEstadual);
    };
    return Juridica;
}(Pessoa));
var pessoa = new Fisica("Gabriela", "71 984101111", "123.456.789-90", "2201265789", new Date("2003-05-30"));
var pjuridica = new Juridica("Teste", "71 999998888", "1234567890001", "123654");
console.log(pjuridica);
console.log(pessoa);
console.log(pessoa.getIdade());
