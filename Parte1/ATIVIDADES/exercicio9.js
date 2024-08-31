// Função que converte uma matriz (array) em uma lista encadeada
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  // Função que converte uma lista encadeada em uma matriz (array)
  function listToArray(list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  
  // Função que adiciona um elemento no início de uma lista
  function prepend(element, list) {
    return {value: element, rest: list};
  }
  
  // Função que retorna o elemento na posição `n` de uma lista
  function nth(list, n) {
    if (!list) return undefined; // Se a lista é nula ou terminou
    if (n === 0) return list.value; // Se é a posição desejada
    return nth(list.rest, n - 1); // Recurte para a próxima posição
  }
  
  // Exemplos:
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  