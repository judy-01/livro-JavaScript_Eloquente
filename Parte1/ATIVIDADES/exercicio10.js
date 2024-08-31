function deepEqual(a, b) {
    // Se os valores são estritamente iguais, retorne true
    if (a === b) return true;
    
    // Verifica se algum dos valores é null ou se não são objetos
    if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
      return false;
    }
  
    // Pega as chaves de ambos os objetos
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    // Verifica se o número de propriedades é o mesmo
    if (keysA.length !== keysB.length) return false;
  
    // Compara cada chave e seus respectivos valores recursivamente
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    // Se todas as verificações foram bem-sucedidas, os objetos são iguais
    return true;
  }
  
  // Exemplos de uso:
  let obj = { here: { is: "an" }, object: 2 };
  
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  // → true
  console.log(deepEqual(obj, { here: { is: "another" }, object: 2 }));
  // → false
  