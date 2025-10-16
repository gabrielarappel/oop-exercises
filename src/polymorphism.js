var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.calcular = function (a, b) {
        return a + b;
    };
    return Soma;
}());
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.calcular = function (a, b) {
        return a - b;
    };
    return Subtracao;
}());
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.prototype.calcular = function (a, b) {
        return a * b;
    };
    return Multiplicacao;
}());
var Divisao = /** @class */ (function () {
    function Divisao() {
    }
    Divisao.prototype.calcular = function (a, b) {
        if (b === 0)
            throw new Error("Divisão por zero não é permitida");
        return a / b;
    };
    return Divisao;
}());
var operacoes = [
    new Soma(),
    new Subtracao(),
    new Multiplicacao(),
    new Divisao()
];
var a = 10;
var b = 2;
operacoes.forEach(function (op) {
    console.log("".concat(op.constructor.name, ": ").concat(op.calcular(a, b)));
});
