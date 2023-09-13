const GerenciadorTarefa = require("./gerenciadorAtividades/GerenciadorTarefas.js");

const input = require("readline-sync");
const clear = require("clear");

//let idTarefa = 2;

const tarefa1 = new GerenciadorTarefas(
  1,
  "tarefa 1",
  "criar menu do crud",
  new Date("2023, 09, 15"),
  statusEnum.INICIAR
);

const tarefa2 = new GerenciadorTarefas(
  2,
  "tarefa 2",
  "criar classes do crud",
  new Date("2023, 09, 17"),
  statusEnum.ANDAMENTO
);

console.log(tarefa1);
console.log(tarefa2);

//const tarefa = [tarefa1, tarefa2];
//let loop = true;
//let busca; // alteração para deletar depois

//PR - 02: Criar método para crud: listar todas as atividades
//PR - 03: Criar método para crud: cadastrar todas as atividades
//PR - 04: Criar método para crud: buscar todas as atividades de acordo com status
//PR - 05: Criar método para crud: alterar atividades
//PR - 06: Criar método para crud: remover atividades

//PR - 07: Criar menu com as opções descritas acima e estrutura do switch de acordo com o menu
//while (true) {
// console.log("=== GERENCIADOR DE TAREFAS ===");
//  console.log("=========MENU========");
//  console.log("0 - Sair do sistema");
// console.log("1 - Listar todas as atividades");
// console.log("2 - Cadastrar uma atividade");
//  console.log("3 - Buscar uma atividade");
//  console.log("4 - Alterar uma atividade");
// console.log("5 - Remover uma atividade");
//  console.log("=======================");
//}

//PR - 08: Criar um arquivo README.md legal com a apresentação do projeto
