const Tarefa = require("./Tarefa.js");

statusEnum = {
  INICIAR: "iniciar",
  ANDAMENTO: "andamento",
  CONCLUIDA: "concluida",
};

class GerenciadorTarefas extends Tarefa {
  constructor() {
    
  }

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

  cadastrarTarefas(){

  }
  listarTarefas() {

  }
  buscarTarefas(){

  }
  alterarTarefa() {

  }
  removerTarefa() {
    
  }
  
}

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

console.log(tarefa1.getTitulo);
console.log(tarefa2.getTitulo);

module.exports = GerenciadorTarefas;
