function buscarProfessorNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { id, nome: 'Diogo', email: 'diogo@gmail.com', cpf:12345678901, curso_id: 1};
}

module.exports = { buscarProfessorNoBanco };