const { buscarComponenteNoBanco } = require('./componenteService');

function obterNomeComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente.nome;
}

function obterHorarioComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente.horario;
}

module.exports = { obterNomeComponente, obterHorarioComponente };