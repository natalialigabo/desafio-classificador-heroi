
const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Quantos heróis você deseja classificar? "));

for (let i = 0; i < quantidade; i++) {
    console.log(`\n--- Herói número ${i + 1} ---`);
    let nome = prompt("Nome: ");
    let XP = parseInt(prompt("XP: "));
    let nivel = "";
    
    switch (true) {
    case (XP <= 1000): 
        nivel = "Ferro";
        
        break;
    case (XP >= 1001 && XP <= 2000):
        nivel = "Bronze";
        
        break;
    case (XP >= 2001 && XP <= 5000):
        nivel = "Prata";
        
        break;
    case (XP >= 5001 && XP <= 7000):
        nivel = "Ouro";
        
        break;
    case (XP >= 7001 && XP <= 8000):
        nivel = "Platina";
        
        break;
    case (XP >= 8001 && XP <= 9000):
        nivel = "Ascendente";
        
        break;
    case (XP >= 9001 && XP <= 10000):
        nivel = "Imortal";
        
        break;
    case (XP >= 10001):
        nivel = "Radiante";
        
        break;
    default:
        nivel = "Inválido";
        
        break;
}


console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
// Descrição dos níveis do herói baseado na quantidade de XP usando switch
function parseString(input) {// Função para garantir que a entrada seja uma string
    return input ? input.toString() : "";
}   
function parseInt(input) {// Função para garantir que a entrada seja um número inteiro
    const parsed = Number(input);
    return isNaN(parsed) ? 0 : parsed;
}