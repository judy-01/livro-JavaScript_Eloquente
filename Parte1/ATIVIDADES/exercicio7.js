function rangeCustom(start, end, step = 1) {
    let result = [];
    
    // Se o passo for positivo, vamos do start até end (inclusive)
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    // Se o passo for negativo, vamos do start até end (inclusive, mas descendente)
    else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    
    return result;
}

function sumArray(numbers) {
    // Soma todos os números da matriz
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Exemplo de uso
let rangeResult = rangeCustom(1, 10);
let sumResult = sumArray(rangeResult);

console.log("Resultado de rangeCustom:", rangeResult);
console.log("Soma dos números:", sumResult);

// Teste com o valor de passo especificado
let rangeResultStep = rangeCustom(1, 10, 2);
console.log("Resultado de rangeCustom com passo 2:", rangeResultStep);

// Teste com valores de passo negativo
let rangeResultNegativeStep = rangeCustom(5, 2, -1);
console.log("Resultado de rangeCustom com passo -1:", rangeResultNegativeStep);
