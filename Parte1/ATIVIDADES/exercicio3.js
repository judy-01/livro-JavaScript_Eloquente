let size = 8; //definição do tamanho da grade
let board = ''; // constroi o tabuleiro

for (let y = 0; y < size; y++) { // itera sobre cada linha
  for (let x = 0; x < size; x++) { // itera sobre cada coluna dentro da linha.
    if ((x + y) % 2 === 0) { // determina se a posição atual será um espaço ou um #. Quando a soma de x e y é par, adiciona um espaço; quando é ímpar, adiciona um #.
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);

/*
let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
  board += (y % 2 === 0 ? ' # # # #\n' : '# # # # \n');
}

console.log(board);
*/
