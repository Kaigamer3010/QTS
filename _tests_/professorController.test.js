const professorService = require('../professorService');
const { obterInfoProfessor, verificarProfessorNoCurso } = require('../professorController');

// transforma a função real em mock
jest.spyOn(professorService, 'buscarProfessorNoBanco');

test('deve retornar o nome, email e cpf do professor simulado', () => {
  // definindo o que o mock vai retornar
  professorService.buscarProfessorNoBanco.mockReturnValue({
    id: 1, 
    nome: 'Diogo', 
    email: 'diogo@gmail.com', 
    cpf:12345678901, 
    curso_id: 1
  });

  const retorno = obterInfoProfessor(1);

  expect(retorno).toBe(`Professor: Diogo, Email: diogo@gmail.com, CPF: 12345678901`);
});

test('deve retornar o status do professor no curso simulado', () => {
  // definindo o que o mock vai retornar
  professorService.buscarProfessorNoBanco.mockReturnValue({
    id: 1, 
    nome: 'Diogo', 
    email: 'diogo@gmail.com', 
    cpf:12345678901, 
    curso_id: 1
  });

  const retorno = verificarProfessorNoCurso(1);

  expect(retorno).toBe('Determinado');
});