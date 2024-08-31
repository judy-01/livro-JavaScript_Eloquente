let brasil =['calor', 'praia', 'comida boa', 'desigualdade', 'analfabetismo']
brasil.push('corrupção') // adiciona 'corrupção' na lista
console.log(brasil)
 


console.log(['rosa', 'jasmin', 'margarida', 'orquídea', 'íris'].indexOf('íris')); // retorna o  índice em que o valor especificado é encontrado.

console.log(['lana del rey', 'katy perry', 'lady gaga', 'adele', 'britney spears'].lastIndexOf('adele'));// retorna o último índice

console.log(['toyota', 'volkswagen', 'honda', 'hyundai', 'ford'].slice(2, 4)); //retorna uma cópia da parte do array entre os índices 2 (inclusivo) e 4 (exclusivo).

console.log(['nome', 'endereço', 'telefone', 'email', 'profissão'].slice(2)); // retorna uma cópia do array a partir do índice 2 até o final.


//Remove o elemento no índice especificado e retorna um novo array.
function remove(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1));
  }
  console.log(remove(["amor", "bandeira", "calor", "desejo", "elemento"], 2));
  