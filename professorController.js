const { buscarProfessorNoBanco } = require('./professorService');

function obterInfoProfessor(id) {
  const professor = buscarProfessorNoBanco(id);
  return `Professor: ${professor.nome}, Email: ${professor.email}, CPF: ${professor.cpf}`;
}

function verificarProfessorNoCurso(id) {
  const professor = buscarProfessorNoBanco(id);
  if (professor.curso_id == id) {
    return 'Determinado';
  } 'Indeterminado';
}

module.exports = { obterInfoProfessor, verificarProfessorNoCurso };