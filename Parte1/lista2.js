// Inicializa a lista de tarefas
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

// Adicionando algumas tarefas
remember("Comprar leite");
remember("Estudar JavaScript");
rememberUrgently("Pagar contas");

// Exibindo a lista de tarefas atual
console.log(todoList); 
// → ["Pagar contas", "Comprar leite", "Estudar JavaScript"]

// Removendo e exibindo a primeira tarefa
console.log(getTask()); 
// → "Pagar contas"

// Exibindo a lista de tarefas após remover a primeira tarefa
console.log(todoList); 
// → ["Comprar leite", "Estudar JavaScript"]

// Adicionando uma tarefa urgente
rememberUrgently("Ligar para o médico");

// Exibindo a lista de tarefas atualizada
console.log(todoList); 
// → ["Ligar para o médico", "Comprar leite", "Estudar JavaScript"]
