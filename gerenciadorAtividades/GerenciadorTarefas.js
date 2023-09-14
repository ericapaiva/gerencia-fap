const input = require("readline-sync");

const Tarefa = require("./Tarefa.js");

statusEnum = {
  INICIAR: "iniciando",
  ANDAMENTO: "andamento",
  CONCLUIDA: "concluida",
};

const tarefasList = [];

class GerenciadorTarefas extends Tarefa {
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

  buscaPorId() {
    const buscarId = input.questionInt("Digite o codigo da tarefa: ");
    for (const t of tarefasList) {
      if (t.getIdTarefa === buscarId) {
        return t;
      }
      break;
    }
    // console.log("CODIGO INEXISTENTE, POR FAVOR DIGITE UM CODIGO VALIDO!!");
  }

  cadastrarTarefas() {
    let titulo = input.question("Informe o titulo da sua tarefa: ");
    let descricao = input.question("Qual a descricao dela? ");
    let dataDeEntrega = new Date(input.question("Digite a data de entrega: "));

    const tarefa = new GerenciadorTarefas(titulo, descricao, dataDeEntrega);

    tarefasList.push(tarefa);

    console.log();
    console.log(
      `
    ========= A tarefa: ${tarefa.getTitulo} foi cadastrada com sucesso! =========
    `
    );
  }

  listarTarefas() {
    console.log("Lista de Tarefas:");

    for (const tarefa of tarefasList) {
      console.log(
        `======== TAREFA ${tarefa.getIdTarefa} ======== 
        - Título: ${tarefa.getTitulo}
        - Descrição: ${tarefa.getDescricao}
        - Data de Entrega: ${tarefa.getDataDeEntrega.toLocaleDateString()}
        - Status: ${tarefa.getStatusEnum}`
      );
    }
  }

  buscarTarefas() {
    const buscarId = input.questionInt("Digite o codigo da tarefa: ");
    let tarefaEncontrada = null;

    for (const tarefa of tarefasList) {
      if (tarefa.getIdTarefa === buscarId) {
        tarefaEncontrada = tarefa;

        console.log(
          `Tarefa Encontrada:
          - Título: ${tarefaEncontrada.getTitulo}
          - Descrição: ${tarefaEncontrada.getDescricao}
          - Data de Entrega: ${tarefaEncontrada.getDataDeEntrega.toLocaleDateString}
          - Status: ${tarefaEncontrada.getStatusEnum}`
        );
        break;
      }
      //console.log("CÓDIGO INEXISTENTE, POR FAVOR DIGITE UM CÓDIGO VÁLIDO!!");
    }
  }

  atualizarTarefas() {
    const tarefaAtualizar = this.buscaPorId();

    tarefaAtualizar.setDescricao = input.question(
      "Digite a descricao atualizada: "
    );
    tarefaAtualizar.setDataDeEntrega = new Date(
      input.question("Digite a data de entrega atualizada: ")
    );
    tarefaAtualizar.setStatusEnum = input.question(
      "Atualize o status: (andamento ou concluida): "
    );
    console.log();
    console.log(
      `
      ======== A tarefa: ${tarefaAtualizar.getTitulo} foi atualizada com sucesso! ========
       `
    );
  }

  removerTarefas() {
    const tarefaRemover = this.buscaPorId();

    tarefasList.splice(tarefaRemover, 1);
    console.log();
    console.log(
      //`==============================================
      //A tarefa: ${tarefaRemover.getTitulo} foi deletada com sucesso!
      //================================================`
      `
    ======== A tarefa: foi deletada com sucesso! ========
   `
    );
  }
}

//const tarefa = new GerenciadorTarefas();

//tarefa.cadastrarTarefas
//tarefa.toString();
//tarefa.removerTarefa();
//tarefa.atualizarTarefa();

module.exports = GerenciadorTarefas;
