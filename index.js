let nomeUsuario = "Giovani"; // Nome do usuário
let XP = 1000; // Experiência do usuário
let nivel; // Variável para armazenar o nível do usuário

if (XP >= 10001) {
    nivel = "Radiante";
} else if (XP >= 9000) {
    nivel = "Imortal";
} else if (XP >= 8000) {
    nivel = "Ascendente";
} else if (XP >= 7000) {
    nivel = "Platina";
} else if (XP >= 5000) {
    nivel = "Ouro";
} else if (XP >= 3000) {
    nivel = "Prata";
} else if (XP >= 2000) {
    nivel = "Bronze";
} else {
    nivel = "Ferro";
}

console.log(`O jogador ${nomeUsuario} está no nível ${nivel}.`);
