/*  Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:
Utilize o for...of para resolver */
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"

//Conforme anunciado
for (let i =0; i < maioresPaises.length; i++) {
    console.log(`${i+1} - ${maioresPaises[i]}`)
}

// Outro mode de fazer

/* const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let pais of maioresPaises) {
  console.log(`${maioresPaises.indexOf(pais) +1} - ${pais}`)
} */