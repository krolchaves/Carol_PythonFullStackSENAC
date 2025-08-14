//

let nome = "João";
let idade = 25;
console.log (nome, idade);
console.log (nome + ", idade: " + idade);

//

let num1 = 10;
let num2 = 5;
console.log("soma: ", num1 + num2);
console.log("subtracao: ", num1 - num2);
console.log("multiplicacao: ", num1 * num2);
console.log("divisão: ", num1 / num2);

//

let primeironome = "Maria";
let sobrenome = "Silva";
let nomecompleto = primeironome + " " + sobrenome;
console.log (nomecompleto);

//

let nota = 5; // Exemplo de nota: se for maior ou igual a 60 "Aprovado", se nota for enre 40 e 59 "Recuperação" se não "Reprovado".
if (nota >= 60) {
    console.log("Aprovado");// "else if" em python seria "elif"
} else if (nota >= 40) { // INT (inteiros), FLOAT (decimal), STRING (texto), BOOLEAN (verdadeiro ou falso), null (nulo), NaN (null as a number)
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//

let diadasemana = 10;
switch (diadasemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Dia Inválido");
}

//

let x = 25 
let y = 20
console.log("x é maior que y?", x > y);
console.log("x é igual a y?", x === y ); // "=" é armazenamento, "===" é comparativo

//
let temcarteira = true;
let age = 17;
let temcarro = false;
let podedirigir = idade >= 18 && temcarteira; // && tem a função de "e". No python é and
console.log("Pode dirigir?", podedirigir);
console.log("Pode dirigir e tem carro?", podedirigir && temcarro);

//

let frase = "JavaScript é divertido";
console.log(frase.toUpperCase()); // toLowerCase para colocar em caixa baixa
let novafrase = frase.replace("divertido", "poderoso");
console.log(novafrase);

// INCREMENTO E DECREMENTO

let contador = 0;
contador += 5; // contador=contador+5 INCREMENTO
contador -= 2; // contador=contador-2 DECREMENTO
contador *= 3; // contador=contador*3
contador /= 2; // contador=contador/2
console.log("O valor final do contador:", contador);







