// Função que retorna uma nova matriz com os elementos na ordem inversa
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

// Função que inverte os elementos da matriz diretamente (modifica a matriz original)
function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;

    // Troca os elementos das extremidades em direção ao centro
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
}

// Exemplo de uso
let arr = [1, 2, 3, 4, 5];

let newArr = reverseArray(arr);
console.log("Nova matriz invertida:", newArr);
console.log("Matriz original não modificada:", arr);

reverseArrayInPlace(arr);
console.log("Matriz original invertida in-place:", arr);

/*
Qual usar?
Use reverseArray quando você precisar garantir que a matriz original permaneça intacta.
Use reverseArrayInPlace quando a performance e a memória forem mais importantes do que manter a matriz original, como em situações de processamento de grandes volumes de dados
*/