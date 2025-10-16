interface OperacaoMatematica {
    calcular(a: number, b: number): number;
}

class Soma implements OperacaoMatematica {
    calcular(a: number, b: number): number {
        return a + b;
    }
}

class Subtracao implements OperacaoMatematica {
    calcular(a: number, b: number): number {
        return a - b;
    }
}

class Multiplicacao implements OperacaoMatematica {
    calcular(a: number, b: number): number {
        return a * b;
    }
}

class Divisao implements OperacaoMatematica {
    calcular(a: number, b: number): number {
        if (b === 0) throw new Error ("Divisão por zero não é permitida");
        return a / b;
    }
}

const operacoes: OperacaoMatematica[] = [
    new Soma(),
    new Subtracao(),
    new Multiplicacao(),
    new Divisao()
];

const a = 10;
const b = 2;

operacoes.forEach(op => {
    console.log(`${op.constructor.name}: ${op.calcular(a,b)}`);
});