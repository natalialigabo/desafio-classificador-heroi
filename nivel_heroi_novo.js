// 1. Definimos a lista de heróis com seus respectivos pontos de experiência (XP)
let listaDeHerois = [
    ["Super Man", 15000],
    ["Batman", 1000],
    ["Mulher Maravilha", 6500],
    ["Thor", 2500],
    ["Homem Aranha", 8500]
];

// 2. O laço 'for' vai percorrer cada linha da nossa lista
for (let i = 0; i < listaDeHerois.length; i++) {
    
    
    let nome = listaDeHerois[i][0];
    let xp = listaDeHerois[i][1];
    let nivel = "";

    
    switch (true) {
        case (xp <= 1000):
            nivel = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;
        case (xp >= 10001):
            nivel = "Radiante";
            break;
        default:
            nivel = "Desconhecido";
    }

    // Saída para CADA herói
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}