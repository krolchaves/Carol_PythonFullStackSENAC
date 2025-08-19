// Exercício 1
let somanotas = 0;  
for(let i = 0; i < 4; i++) {  
    let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));  
    somanotas += nota;  
}  
let media = somanotas/4;  
console.log("Média", media);  
if (media >= 7) {  // Corrigido aqui
    console.log("Aprovado"); 
} else {  
    console.log("Reprovado");  
}

// Exercício 2 com while
let num1 = parseInt(prompt("Digite o número inicial:"));  
let num2 = parseInt(prompt("Digite o número final:"));  
let somapares = 0; 
while (num1 <= num2) {  
    if (num1 % 2 === 0) {  
        somapares += num1;
    }
    num1++; 
}  
console.log("Soma:", somapares);

// Exercício 2 com for
let inicio = parseInt(prompt("Digite o número inicial:")); 
let fim = parseInt(prompt("Digite o número fim:"));
let somapares2 = 0
for(let i = inicio; i <= fim; i++) {
    if(i % 2 ===0) {
        somapares2 += i;
    }
}
console.log("Soma dos números pares:", somapares2)

// Exercício 3
let texto = prompt("Digite uma palavra ou frase:")
texto = texto.toLowerCase(); // colocar em caixa baixa
texto = texto.replace(/ /g, ""); // / /g é espaço
let textoinvert = texto.split("").reverse().join("");
if (texto === textoinvert) {
    console.log("É palíndromo");
} else {
    console.log("Não é palíndromo")
}

// Exercício 3 com while
let continuacao = "s";
while (continuacao === "s") {  // Corrigido: operador de comparação
    let texto = prompt("Digite uma palavra ou frase:");
    texto = texto.toLowerCase(); // colocar em caixa baixa
    texto = texto.replace(/ /g, ""); // remove espaços
    let textoinvert = texto.split("").reverse().join("");

    if(texto === textoinvert) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
    
    continuacao = prompt("Deseja continuar? s (sim) ou n (não)").toLowerCase();
}

// Exercício 4
let p = parseFloat(prompt("Digite o valor principal (p):"));
let r = parseFloat(prompt("Digite a taxa de juros anual (r):"))/100;
let t = parseFloat(prompt("Digite o tempo em anos (t):"));
let m = p *(1 + r * t);
console.log("Montante final:", m);

// Exercicio 5
let numero = prompt("Digite um número inteiro positivo:");
if(/^\d+$/.test(numero)) {
    console.log("Número de digitos:", numero.length);
}
else {
    console.log("Entrada inválida. Digite um número inteiro positivo.");
    }










    // NPM: Node Package Maneger
