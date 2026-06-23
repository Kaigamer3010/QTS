function buscarComponenteNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { id, nome: 'QTS', horario: {hora_inicio: 10, hora_fim: 12, dia_semana: 'quarta'}};
}

module.exports = { buscarComponenteNoBanco };