

const hummus = function(factor) //definição de funções
 {
    const ingredient = function(amount, unit, name) { //outra função com três paramêtros
      let ingredientAmount = amount * factor; // calcula a quatidade de ingredientes
      if (ingredientAmount > 1) {
        unit += "s"; //Se a quantidade ajustada (ingredientAmount) for maior que 1, adiciona um "s" ao final da unidade
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  hummus(3)

  /*

Função hummus: Recebe um factor e define uma função interna chamada ingredient.
Função ingredient: Calcula a quantidade ajustada de um ingrediente, verifica o plural da unidade, e imprime a quantidade, unidade, e nome do ingrediente.
Escopo de Funções: A função ingredient está dentro da função hummus, então ela pode acessar o factor diretamente.
  */

function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(4.5));
  
  console.log(roundTo(4.5, 2));


  function embrulharValor(n) {
    let local = n;
    return () => local;
  }
  
  let embrulho1 = embrulharValor(1);
  let embrulho2 = embrulharValor(2);
  console.log(embrulho1());
  // → 1
  console.log(embrulho2());
  


  function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(3, 3));


  function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ??
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));

  function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
  }
  printFarmInventory(7, 11);
  