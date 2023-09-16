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
      console.log("\n=============== LISTAR ================");
      gerenciador.listarTarefas();
      console.log("=========================================");
      readline.keyInPause();
      break;

    case 2:
      let op = 0;
      do {
        console.log("\n================ CADASTRAR ==================");
        console.log();
        gerenciador.cadastrarTarefas();
        console.log("===============================================");
        op = input.questionInt(
          "Deseja realizar outro cadastro (1 - SIM / 2 - NAO): "
        );
        console.clear();
      } while (op === 1);
      readline.keyInPause();
      break;

    case 3:
      console.log("\n================ BUSCAR ==================");
      gerenciador.buscarTarefas();
      console.log("============================================");
      readline.keyInPause();
      break;

    case 4:
      console.log("\n================== ALTERAR ===================");
      gerenciador.atualizarTarefas();
      console.log("================================================");
      readline.keyInPause();
      break;

    case 5:
      console.log("\n=================== REMOVER ====================");
      gerenciador.removerTarefas();
      console.log("==================================================");
      readline.keyInPause();
      break;

    case 6:
      console.log("\n============ LISTA DE TAREFAS =============");
      gerenciador.ListarPorStatus();
      console.log("=============================================");
      readline.keyInPause();
      break;

    case 0:
      console.log("\n=======================================");
      console.log("\nSaindo do sistema");
      console.log("=========================================");
      loop = false;
      readline.keyInPause();
      break;

    default:
      console.log();
      console.log("Opcao invalida!");
      readline.keyInPause();
      break;
  }
}
