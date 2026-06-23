const cursoService = require('../cursoService');
const { obterNomeCurso, obterPeriodoCurso } = require('../cursoController');

// transforma a função real em mock
jest.spyOn(cursoService, 'buscarCursoNoBanco');

test('deve retornar o nome do curso simulado', () => {
  // definindo o que o mock vai retornar
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'DS',
    periodo: 'Matutino'
  });

  const nome = obterNomeCurso(1);

  expect(nome).toBe('DS');
});

test('deve retornar o periodo do curso simulado', () => {
  // definindo o que o mock vai retornar
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'DS',
    periodo: 'Matutino'
  });

  const nome = obterPeriodoCurso(1);

  expect(nome).toBe('Matutino');
});