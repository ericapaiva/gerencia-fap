const input = require("readline-sync");
const clear = require("clear");

/**
 * PR - 01:
 * Criar objeto de "atividade"(codigoAtividade, descricaoAtividade, dataDeEntrega,
 * status (Enum: A_FAZER, ANDAMENTO, CONCLUIDA))}
 */

let idTarefa = 2;

const statusEnum = {
  INICIAR: "iniciar",
  ANDAMENTO: "andamento",
  CONCLUIDA: "concluida",
};

const tarefa1 = {
  idTarefa: 1,
  descricao: "tarefa 1",
  dataDeEntrega: new Date("2023, 09, 15"),
  status: statusEnum.INICIAR,
};

const tarefa2 = {
  idTarefa: 2,
  descricao: "tarefa 2",
  dataDeEntrega: new Date("2023, 11, 05"),
  status: statusEnum.ANDAMENTO,
};

console.log(tarefa1.status);

const tarefa = [tarefa1, tarefa2];
//let loop = true;
let busca; // alteração para deletar depois

//PR - 02: Criar método para crud: listar todas as atividades
//PR - 03: Criar método para crud: cadastrar todas as atividades
//PR - 04: Criar método para crud: buscar todas as atividades de acordo com status
//PR - 05: Criar método para crud: alterar atividades
//PR - 06: Criar método para crud: remover atividades

<<<<<<< HEAD
//while (true) {
=======
//PR - 07: Criar menu com as opções descritas acima e estrutura do switch de acordo com o menu
while (true) {
  console.log("=== GERENCIADOR DE TAREFAS ===");
  console.log("=========MENU========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todas as atividades");
  console.log("2 - Cadastrar uma atividade");
  console.log("3 - Buscar uma atividade");
  console.log("4 - Alterar uma atividade");
  console.log("5 - Remover uma atividade");
  console.log("=======================");
  
  }
>>>>>>> a82096c (PR-07: Menu feito)

//PR - 07: Criar menu com as opções descritas acima e estrutura do switch de acordo com o menu
//}

//PR - 08: Criar um arquivo README.md legal com a apresentação do projeto
