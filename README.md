# Sistema de Classificação de Nível de Herói

Este repositório contém um sistema de classificação de jogadores baseado em sua experiência (XP). O código determina o nível do jogador com base na quantidade de XP acumulada.

## Como funciona

O sistema classifica o jogador conforme a tabela abaixo:

| XP Mínimo | Nível       |
|-----------|------------|
| 10.001+   | Radiante   |
| 9.000+    | Imortal    |
| 8.000+    | Ascendente |
| 7.000+    | Platina    |
| 5.000+    | Ouro       |
| 3.000+    | Prata      |
| 2.000+    | Bronze     |
| < 2.000   | Ferro      |

O código recebe um nome de usuário e sua quantidade de XP, processa a informação e exibe o nível correspondente no console.

## Exemplo de uso

```javascript
let nomeUsuario = "Giovani"; // Nome do jogador
let XP = 1000; // Experiência
let nivel;

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
```

**Saída esperada:**  
```
O jogador Giovani está no nível Ferro.
```

## Tecnologias utilizadas  
- JavaScript  

## Licença  
Este projeto é de código aberto. Fique à vontade para modificá-lo e melhorá-lo! 🚀
