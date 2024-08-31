// AND - retorna true se ambos forem true, caso contrario , retorna false
console.log(true && false) // false
console.log(false & true) // false 

// OR - retorna true se pelo menos um dos operadores for true
console.log(false || true) // true
console.log(false || false) // false

// NOT - inverte o valor booleano
console.log(! true) // false
console.log(! false ) // true

// TERNARIO - retorna valor , baseado em uma condição
console.log( true ? 1: 5) //1
console.log( false ? 1 :3) //3

//NAN - sempre retorna false
console.log(NaN== NaN) // false 
console.log(NaN != NaN) //false

//NULL - representa a ausência de valor
console.log(null == null) // true
console.log(null != null)// false

//UNDEFINED - indica que uma variavél foi declada mas ainda não foi atribuida algum valor
console.log(null == undefined)
console.log( undefined != undefined)

// Coalescência Nula - retorna o operando do lado direito quando o lado esquerdo é null ou underfined
console.log( 1 ?? 6)