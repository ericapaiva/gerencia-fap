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

  buscaPorId() {
    const buscarId = input.questionInt("Digite o codigo da tarefa: ");

    for (const t of tarefasList) {
      if (t.getIdTarefa == buscarId) {
        return t;
      }
    }
    console.log("CODIGO INEXISTENTE, POR FAVOR DIGITE UM CODIGO VALIDO!!");
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

  cadastrarTarefas() {
    let titulo = input.question("Informe o titulo da sua tarefa: ");
    let descricao = input.question("Qual a descricao dela? ");
    let dataDeEntrega = this.manipularData();

    const tarefa = new GerenciadorTarefas(titulo, descricao, dataDeEntrega);

    tarefasList.push(tarefa);

    console.log();
    console.log(
      `========= A tarefa: ${tarefa.getTitulo} foi cadastrada com sucesso! =========`
    );
  }

  listarTarefas() {
    for (const tarefa of tarefasList) {
      console.log(
        `=============== TAREFA ${tarefa.getIdTarefa} ==============
        - Título: ${tarefa.getTitulo}
        - Descrição: ${tarefa.getDescricao}
        - Data de Entrega: ${tarefa.getDataDeEntrega.toLocaleDateString()}
        - Status: ${tarefa.getStatusEnum}`
      );
    }
  }

  buscarTarefas() {
    let tarefaEncontrada = this.buscaPorId();

    if (tarefaEncontrada) {
      console.log(
        `Tarefa Encontrada:
            - Título: ${tarefaEncontrada.getTitulo}
            - Descrição: ${tarefaEncontrada.getDescricao}
            - Data de Entrega: ${tarefaEncontrada.getDataDeEntrega.toLocaleDateString()}
            - Status: ${tarefaEncontrada.getStatusEnum}`
      );
    }
  }

  ListarPorStatus() {
    const status = input.question(
      "Entre com o status que voce deseja buscar: "
    );

    let objetoTarefa = null;

    for (const tarefa of tarefasList) {
      if (tarefa.getStatusEnum == status) {
        console.log(
          `Tarefa Encontrada:
          - Título: ${tarefa.getTitulo}
          - Descrição: ${tarefa.getDescricao}
          - Data de Entrega: ${tarefa.getDataDeEntrega.toLocaleDateString()}
          `
        );
        objetoTarefa = tarefa;
      }
    }
    if (objetoTarefa === null) {
      console.log("STATUS INVÁLIDO OU INEXISTENTE!!");
    }
  }

  atualizarTarefas() {
    const tarefaAtualizar = this.buscaPorId();

    tarefaAtualizar.setDescricao = input.question(
      "Digite a descricao atualizada: "
    );

    tarefaAtualizar.setDataDeEntrega = this.manipularData();

    tarefaAtualizar.setStatusEnum = input.question(
      "Atualize o status: (andamento ou concluida): "
    );

    console.log(
      ` A tarefa: ${tarefaAtualizar.getTitulo} foi atualizada com sucesso!`
    );
  }
  removerTarefas() {
    const tarefaRemover = this.buscaPorId();

    tarefasList.splice(tarefasList.indexOf(tarefaRemover), 1);
    console.log();
    console.log(
      `==============================================
      A tarefa: ${tarefaRemover.getTitulo} foi deletada com sucesso!
      ================================================`
    );
  }
}

export { GerenciadorTarefas };
