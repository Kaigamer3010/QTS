const { buscarCursoNoBanco } = require('./cursoService');

function obterNomeCurso(id) {
  const curso = buscarCursoNoBanco(id);
  return curso.nome;
}

function obterPeriodoCurso(id) {
  const curso = buscarCursoNoBanco(id);
  return curso.periodo;
}

module.exports = { obterNomeCurso, obterPeriodoCurso };