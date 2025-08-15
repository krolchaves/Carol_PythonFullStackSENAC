// Exercicio 1 //
let valor= 150.0;
let desconto = 20;
let valordesc = valor -(valor*0.2);
console.log("O preço final é: ", valordesc);

// Exercicio 2 //
let peso = 70;
let altura = 1.75;
let imc = peso/(altura**2);
console.log("O valor do IMC é: ", imc);

//Exercicio 3//
let idade=22;
let temexperiencia=true;
elegivel = (idade>=18) && (temexperiencia=true);
console.log("A pessoa é elegível para o concurso: ", elegivel);

// Exercicio 4//
let nivel_acesso = 1;
if(nivel_acesso ===3) {
    console.log("Acesso total permitido");
}
else if (nivel_acesso ===2) {
    console.log("Acesso parcial permitido");
}
else {
    console.log("Acesso restrito");
}

// Exercicio 5 //
let celsius =19;
let fahrenheit =(celsius*9/5)+32;
console.log("A temperatura em grau celsius", celsius, "em fahrenheit é", fahrenheit+"F");

//Exercicio 6//
let numint = 20;
if(numint % 2 !==0) { // % é o modulo ou modular, "!== é <>"
    console.log("É impar");
}
else {
    console.log("É par");
}

//Exercicio 7//
let pesokg=40;
if(pesokg<=5) {
    console.log("O valor do frete é R$10,00");
}
else if(pesokg>5 && pesokg <=10) {
    console.log("O valor do frete é R$20,00");
}
else{
    console.log("O valor do frete é R$30,00");
}



