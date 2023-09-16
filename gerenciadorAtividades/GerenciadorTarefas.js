import input from "readline-sync";
import Tarefa from "./Tarefa.js";

const statusEnum = {
  INICIAR: "iniciada",
  ANDAMENTO: "andamento",
  CONCLUIDA: "concluida",
};

const tarefasList = [];

export default class GerenciadorTarefas extends Tarefa {
  static _idTarefa = 0;

  constructor(titulo, descricao, dataDeEntrega) {
    super(titulo, descricao, dataDeEntrega);
    this._idTarefa = GerenciadorTarefas._idTarefa++;
    this._statusEnum = statusEnum.INICIAR;
  }

  get getIdTarefa() {
    return this._idTarefa;
  }

  get getStatusEnum() {
    return this._statusEnum;
  }

  set setStatusEnum(statusEnum) {
    this._statusEnum = statusEnum;
  }

  manipularData() {
    const data = input.question("Digite a data de entrega (dd/mm/aaaa): ");

    const dataDividida = data.split("/");

    const dia = parseInt(dataDividida[0]);
    const mes = parseInt(dataDividida[1]) - 1;
    const ano = parseInt(dataDividida[2]);

    this._dataDeEntrega = new Date(ano, mes, dia);

    return this._dataDeEntrega;
  }

  buscaPorId() {
    const buscarId = input.questionInt("Digite o codigo da tarefa: ");

    for (const t of tarefasList) {
      if (t.getIdTarefa == buscarId) {
        return t;
      }
    }
    throw console.error(
      "\nCODIGO INEXISTENTE, POR FAVOR DIGITE UM CODIGO VALIDO!!"
    );
  }

  listarTarefas() {
    console.log("\n============ LISTA DE TAREFAS =============");
    for (const tarefa of tarefasList) {
      console.log(
        `=============== TAREFA ${tarefa.getIdTarefa} ==============
        - Título: ${tarefa.getTitulo}
        - Descrição: ${tarefa.getDescricao}
        - Data de Entrega: ${tarefa.getDataDeEntrega.toLocaleDateString()}
        - Status: ${tarefa.getStatusEnum}`
      );
    }
    console.log("=============================================");
  }

  cadastrarTarefas() {
    console.log("\n================ CADASTRAR ==================");
    let titulo = input.question("Informe o titulo da sua tarefa: ");
    let descricao = input.question("Qual a descricao dela? ");
    let dataDeEntrega = this.manipularData();

    const tarefa = new GerenciadorTarefas(titulo, descricao, dataDeEntrega);
    tarefasList.push(tarefa);

    console.log(`\nA tarefa: ${tarefa.getTitulo} foi cadastrada com sucesso!`);
    console.log("===============================================");
  }

  buscarTarefas() {
    console.log("\n================ BUSCAR ==================");
    let tarefaEncontrada = this.buscaPorId();
    console.clear();

    if (tarefaEncontrada) {
      console.log(
        `Tarefa Encontrada:
            - ID: ${tarefaEncontrada.getIdTarefa}
            - Título: ${tarefaEncontrada.getTitulo}
            - Descrição: ${tarefaEncontrada.getDescricao}
            - Data de Entrega: ${tarefaEncontrada.getDataDeEntrega.toLocaleDateString()}
            - Status: ${tarefaEncontrada.getStatusEnum}`
      );
    }
    console.log("============================================");
  }

  atualizarTarefas() {
    console.log("\n================== ALTERAR ===================");
    const tarefaAtualizar = this.buscaPorId();

    tarefaAtualizar.setDescricao = input.question(
      "Digite a descricao atualizada: "
    );

    tarefaAtualizar.setDataDeEntrega = this.manipularData();

    tarefaAtualizar.setStatusEnum = input.question(
      "Atualize o status: (andamento ou concluida): "
    );

    console.log(
      `\nA tarefa: ${tarefaAtualizar.getTitulo} foi atualizada com sucesso!`
    );
    console.log("================================================");
  }

  removerTarefas() {
    while (true) {
      console.log("\n=================== REMOVER ====================");
      const tarefaRemover = this.buscaPorId();
      let confirma = input.questionInt(
        `Tem certeza que deseja remover a atividade ${tarefaRemover.getIdTarefa} (1 - SIM / 2 - NAO)?`
      );
      console.clear();
      if (confirma === 1) {
        tarefasList.splice(tarefasList.indexOf(tarefaRemover), 1);
        console.log(
          `\nA tarefa: ${tarefaRemover.getTitulo} foi deletada com sucesso!`
        );
        console.log("==================================================");
        break;
      }
    }
  }

  ListarPorStatus() {
    console.log("\n============ LISTA DE TAREFAS =============");
    const status = input.question(
      "Entre com o status que voce deseja buscar: \n"
    );

    let objetoTarefa = null;

    for (const tarefa of tarefasList) {
      if (tarefa.getStatusEnum == status) {
        console.log(
          `Tarefa Encontrada:
          - ID: ${tarefa.getIdTarefa}
          - Título: ${tarefa.getTitulo}
          - Descrição: ${tarefa.getDescricao}
          - Data de Entrega: ${tarefa.getDataDeEntrega.toLocaleDateString()}
          `
        );
        objetoTarefa = tarefa;
      }
    }
    if (objetoTarefa === null) {
      throw console.error("\nSTATUS INVÁLIDO OU INEXISTENTE!!");
    }
    console.log("=============================================");
  }
}

export { GerenciadorTarefas };
