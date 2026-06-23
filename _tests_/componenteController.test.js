const componenteService = require('../componenteService');
const { obterNomeComponente, obterHorarioComponente } = require('../componenteController');

// transforma a função real em mock
jest.spyOn(componenteService, 'buscarComponenteNoBanco');

test('deve retornar o nome do componente simulado', () => {
  // definindo o que o mock vai retornar
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1, 
    nome: 'QTS', 
    horario: {
      hora_inicio: 10, 
      hora_fim: 12, 
      dia_semana: 'quarta'
    }
  });

  const nome = obterNomeComponente(1);

  expect(nome).toBe('QTS');
});


test('deve retornar o horario do componente simulado', () => {
  // definindo o que o mock vai retornar
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1, 
    nome: 'QTS', 
    horario: {
      hora_inicio: 10, 
      hora_fim: 12, 
      dia_semana: 'quarta'
    }
  });

  const horario = JSON.stringify(obterHorarioComponente(1));

  expect(horario).toBe(JSON.stringify({
      hora_inicio: 10, 
      hora_fim: 12, 
      dia_semana: 'quarta'
    }));
});



test('exemplo com funcao falsa', () => {
  const funcaoFalsa = jest.fn();
  funcaoFalsa.mockReturnValue({
    id: 1, 
    nome: 'QTS', 
    horario: {
      hora_inicio: 10, 
      hora_fim: 12, 
      dia_semana: 'quarta'
    },
    professor: 'Determinado'
  });

  expect(JSON.stringify(funcaoFalsa())).toBe( JSON.stringify({
    id: 1, 
    nome: 'QTS', 
    horario: {
      hora_inicio: 10, 
      hora_fim: 12, 
      dia_semana: 'quarta'
    },
    professor: 'Determinado'
  }));
  expect(funcaoFalsa).toHaveBeenCalled();
});