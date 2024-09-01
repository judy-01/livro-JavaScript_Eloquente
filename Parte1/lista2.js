
let todoList = [];

// Função para adicionar uma tarefa ao final da lista
function remember(task) {  
  todoList.push(task);
}

// Função para remover e retornar a primeira tarefa da lista
function getTask() { 
  return todoList.shift();
}

// Função para adicionar uma tarefa no início da lista
function rememberUrgently(task) {
  todoList.unshift(task);
}

//  tarefas
remember("Comprar livros");
remember("Estudar JavaScript");
rememberUrgently("Pagar faculdade");

console.log(`Nova lista\n[${todoList}]`); 
console.log('-'.repeat(60))
console.log(`Remove e exibe a primeira tarefa\n[${getTask()}]`); 
console.log('-'.repeat(60))

console.log(`Lista após remover a primeira tarefa\n[${todoList}]`); 


console.log('-'.repeat(60))
console.log(`Adicionando outra tarefa...\n`)
rememberUrgently("Ligar para o CAPs");


console.log('-'.repeat(60))
console.log(`Lista atualizada\n[${todoList}]`); 
