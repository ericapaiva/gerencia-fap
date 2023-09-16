import input from "readline-sync";
import readline from "readline-sync";
import GerenciadorTarefas from "./gerenciadorTarefas.js";

let loop = true;

const gerenciador = new GerenciadorTarefas();

while (loop) {
  console.log("\n===== GERENCIADOR DE TAREFAS ======");
  console.log("=============== MENU ==============");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todas as atividades");
  console.log("2 - Cadastrar uma atividade");
  console.log("3 - Buscar uma atividade");
  console.log("4 - Alterar uma atividade");
  console.log("5 - Remover uma atividade");
  console.log("6 - Listar atividades por status");
  console.log("===================================");
  let opcao = input.questionInt("Escolha uma opcao: ");
  console.log("===================================");
  console.clear();

  switch (opcao) {
    case 1:
      gerenciador.listarTarefas();
      readline.keyInPause();
      console.clear();
      break;

    case 2:
      let op = 0;
      do {
        gerenciador.cadastrarTarefas();
        op = input.questionInt(
          "Deseja realizar outro cadastro (1 - SIM / 2 - NAO): "
        );
        console.clear();
      } while (op === 1);
      readline.keyInPause();
      console.clear();
      break;

    case 3:
      gerenciador.buscarTarefas();
      readline.keyInPause();
      console.clear();
      break;

    case 4:
      gerenciador.atualizarTarefas();

      readline.keyInPause();
      console.clear();
      break;

    case 5:
      gerenciador.removerTarefas();
      readline.keyInPause();
      console.clear();
      break;

    case 6:
      gerenciador.ListarPorStatus();
      readline.keyInPause();
      console.clear();
      break;

    case 0:
      console.log("\n=======================================");
      console.log("\nSaindo do sistema");
      console.log("=========================================");
      loop = false;
      break;

    default:
      console.log();
      console.log("Opcao invalida!");
      readline.keyInPause();
      console.clear();
      break;
  }
}
