class Tarefa {
  constructor(titulo, descricao, dataDeEntrega) {
    this._titulo = titulo;
    this._descricao = descricao;
    this._dataDeEntrega = dataDeEntrega;
  }

  get getTitulo() {
    return this._titulo;
  }

  get getDescricao() {
    return this._descricao;
  }

  set setDescricao(descricao) {
    this._descricao = descricao;
  }

  get getDataDeEntrega() {
    return this._dataDeEntrega;
  }

  set setDataDeEntrega(dataDeEntrega) {
    this._dataDeEntrega = dataDeEntrega;
  }

  criarTarefa() {}
}

module.exports = Tarefa;
