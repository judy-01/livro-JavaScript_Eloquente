
let idade = '23'
console.log(idade) // 23
console.log(typeof(idade)) //string

const CPF = 1244455677;
console.log(`Seu CPF : ${CPF}`)


let modo = "claro"
modo = "escuro" // muda o valor da variavel 
console.log(modo);

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" "); // divide o valor de sentence com  ' ' entre cada palavra se transformando em um array cada
console.log(words);
console.log(words.join(", ")); // junta cada palavra do array, formando uma única frase, separada por ',' cada palavra

console.log("JAVASCRIPT".repeat(3)); // repete palavra

let words2 = ["never", "fully"];
console.log(["will", ...words2, "understand"]); // ... é usado para 'espalhar' um elemento dentro de outro elemento