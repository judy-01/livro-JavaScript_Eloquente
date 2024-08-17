


// Function Declaration
function somar(a, b) {
    return a + b;
  }
  
  console.log(somar(2, 3)); 

// Function Expression
  const multiplicar = function(a, b) {
    return a * b;
  };
  
  console.log(multiplicar(4, 5)); 
  

 // Arrow Function
  const dividir = (a, b) => {
    return a / b;
  };
  
  console.log(dividir(10, 2)); 

//Função anônima
setTimeout(function() {
    console.log('Essa mensagem aparece depois de 2 segundos');
  }, 2000);
  
  