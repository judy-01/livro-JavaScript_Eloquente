for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // verifica se o número é divisível por 3 e 5; se for, imprime "FizzBuzz".
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
