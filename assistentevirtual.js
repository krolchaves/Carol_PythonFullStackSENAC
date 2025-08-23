function mostrarMenu() {
    console.log("\n--- Opções do Assistente Virtual Artur ---");
    console.log("[1] Que horas são? (Fictício)");
    console.log("[2] Conte uma curiosidade");
    console.log("[3] Qual o significado do seu nome?");
    console.log("[4] Sair");
    console.log("------------------------------------------");
}

function mostrarHoraFicticia() {
    console.log("De acordo com meus circuitos, agora são 19:00 do dia 24/10/2025. Dia de alegria =)");
}

function contarCuriosidade() {
    console.log("Você sabia que os gatos têm um órgão chamado órgão de Jacobson, localizado no céu da boca, que permite a eles detectar odores de uma forma especial? Por isso, às vezes eles abrem a boca depois de cheirar alguma coisa: é o chamado reflexo Flehmen!");
}

function significadoAssistente(NOME_ASSISTENTE) {
    console.log(`${NOME_ASSISTENTE} significa urso forte e está associado a qualidades como força, coragem e liderança. Além disso, é um nome que remete ao lendário Rei Arthur, símbolo de nobreza e bravura.`);
}

const NOME_ASSISTENTE = "Artur";
console.log(`Olá! Eu sou ${NOME_ASSISTENTE}, seu assistente virtual`);

const nomeUsuario = prompt("Qual é o seu nome? ");
console.log(`Mutito Prazer ${nomeUsuario}! Seguem as opções:`);

let opcao = "";
while (opcao !== "4") {
mostrarMenu();
    opcao = prompt("Escolha uma opção: ");

    if(opcao === "1") {
        mostrarHoraFicticia();
    } else if (opcao === "2") {
        contarCuriosidade();
    } else if (opcao === "3") {
        significadoAssistente(NOME_ASSISTENTE);
    } else if (opcao ==="4") {
        console.log(`Foi um prazer conversar com você ${nomeUsuario}! Até a próxima! Byeeeee`);
    } else {
        console.log(`Opção inválida ${nomeUsuario}! Fala sério! Tente novamente, por favor.`);
    }
}














 