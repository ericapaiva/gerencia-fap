const GerenciadorTarefa = require("./GerenciadorTarefas.js");

const gerenciador = new GerenciadorTarefa();

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
  let opcao = readline.questionInt("Escolha uma opção");

  switch (opcao) {
    case 1:
      gerenciador.listarTarefas();
      break;

    case 2:
      gerenciador.cadastrarTarefas();
      break;

    case 3:
      gerenciador.buscarTarefas();
      break;

    case 4:
      gerenciador.alterarTarefaTarefas();
      break;

    case 5:
      gerenciador.removerTarefaTarefa();
      break;

    case 0:
      console.log("saindo do sistema");
      loop = false;
      break;
    default:
      console.log("opção invalida");
      break;
  }
}
