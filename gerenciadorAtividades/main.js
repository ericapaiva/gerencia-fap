import input from "readline-sync";

import GerenciadorTarefas from "./gerenciadorTarefas.js";

let loop = true;

const gerenciador = new GerenciadorTarefas();

while (loop) {
  console.log();
  console.log("=== GERENCIADOR DE TAREFAS ===");
  console.log("=============MENU============");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todas as atividades");
  console.log("2 - Cadastrar uma atividade");
  console.log("3 - Buscar uma atividade");
  console.log("4 - Alterar uma atividade");
  console.log("5 - Remover uma atividade");
  console.log("=============================");
  let opcao = input.questionInt("Escolha uma opcao: ");
  console.log("=============================");

  switch (opcao) {
    case 1:
      console.log();
      gerenciador.listarTarefas();
      break;
    case 2:
      let op = 0;
      do {
        console.log();
        gerenciador.cadastrarTarefas();
        op = input.questionInt(
          "Deseja realizar outro cadastro (1 - SIM / 2 - NAO): "
        );
      } while (op === 1);
      break;

    case 3:
      console.log();
      gerenciador.buscarTarefas();
      break;

    case 4:
      console.log();
      gerenciador.atualizarTarefas();
      break;

    case 5:
      console.log();
      gerenciador.removerTarefas();
      break;

    case 0:
      console.log();
      console.log("saindo do sistema");
      loop = false;
      break;

    default:
      console.log();
      console.log("opção invalida");
      break;
  }
}
