const Tarefa = require("./projetos-fap/gerencia-fap/gerenciadorAtividades/Tarefa.js");

class GerenciadorTarefas extends Tarefa {
  statusEnum = {
    INICIAR: "iniciar",
    ANDAMENTO: "andamento",
    CONCLUIDA: "concluida",
  };

  constructor(idTarefa, titulo, descricao, dataDeEntrega, statusEnum) {
    super(titulo, descricao, dataDeEntrega);
    this._idTarefa = idTarefa;
    this._statusEnum = statusEnum;
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
}

module.exports = GerenciadorTarefas;
