const { somar, mensagemBoasVindas, valorMaior, parImpar, votar, positivo, bonus, dirigir, semestre, vogal, media, cadastro } = require('../script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');


//ex01
});
test('Qual é o maior', () => {
  expect(valorMaior(1, 2)).toBe(2);
});
test('Qual é o maior', () => {
  expect(valorMaior(1, -2)).toBe(1);
});
test('Qual é o maior', () => {
  expect(valorMaior("1", -2)).toBe("erro");
});
test('Qual é o maior', () => {
  expect(valorMaior(1, "asdf")).toBe("erro");
});
test('Qual é o maior', () => {
  expect(valorMaior(1, 1)).toBe("são iguais");
});


//ex02

test("se os números são pares ou impares", () => {
  expect(parImpar(1, 3)).toBe("1 é ímpar e 3 é ímpar");
})
test("se os números são pares ou impares", () => {
  expect(parImpar(1, 222)).toBe("1 é ímpar e 222 é par");
})
test("se os números são pares ou impares", () => {
  expect(parImpar(-2, 124)).toBe("-2 é par e 124 é par");
})
test("se os números são pares ou impares", () => {
  expect(parImpar(-2, "124")).toBe("Erro");
})


//ex03

test("se tem idade para votar", () => {
  expect(votar("asf")).toBe("erro");
})
test("se tem idade para votar", () => {
  expect(votar(-2)).toBe("erro");
})
test("se tem idade para votar", () => {
  expect(votar(3)).toBe("Não pode votar");
})
test("se tem idade para votar", () => {
  expect(votar(17)).toBe("Pode votar");
})
test("se tem idade para votar", () => {
  expect(votar(63)).toBe("Pode votar");
})
test("se tem idade para votar", () => {
  expect(votar(43)).toBe("Deve votar");
})

//ex04

test("se o numero é postivo", () => {
  expect(positivo("sadfas")).toBe("erro");
});
test("se o numero é postivo", () => {
  expect(positivo(1243)).toBe("Positivo");
});
test("se o numero é postivo", () => {
  expect(positivo(-4)).toBe("Negativo");
});
test("se o numero é postivo", () => {
  expect(positivo(0)).toBe("Zero");
});

//ex05

test("se o bonus esta sendo calculado", () => {
  expect(bonus("sadfas")).toBe("erro");
});
test("se o bonus esta sendo calculado", () => {
  expect(bonus(-4)).toBe("erro");
});
test("se o bonus esta sendo calculado", () => {
  expect(bonus(1500)).toBe("bônus é de: 300R$");
});
test("se o bonus esta sendo calculado", () => {
  expect(bonus(3000)).toBe("bônus é de: 300R$");
});
test("se o bonus esta sendo calculado", () => {
  expect(bonus(10000)).toBe("bônus é de: 500R$");
});

//ex06

test("se tem idade para dirigir", () => {
  expect(dirigir("sadfas")).toBe("erro");
});
test("se tem idade para dirigir", () => {
  expect(dirigir(-4)).toBe("erro");
});
test("se tem idade para dirigir", () => {
  expect(dirigir(150)).toBe("Pode dirigir");
});
test("se tem idade para dirigir", () => {
  expect(dirigir(3)).toBe("Não pode dirigir");
});

//ex07

test("qual semestre o mes pertence", () => {
  expect(semestre("sadfas")).toBe("erro");
});
test("qual semestre o mes pertence", () => {
  expect(semestre(-4)).toBe("erro");
});
test("qual semestre o mes pertence", () => {
  expect(semestre(150)).toBe("erro");
});
test("qual semestre o mes pertence", () => {
  expect(semestre(3)).toBe("1Semestre");
});
test("qual semestre o mes pertence", () => {
  expect(semestre(7)).toBe("2Semestre");
});

//ex08

test("se a letra é vogal ou consoante", () => {
  expect(vogal("sadfas")).toBe("erro");
});
test("se a letra é vogal ou consoante", () => {
  expect(vogal(1234)).toBe("erro");
});
test("se a letra é vogal ou consoante", () => {
  expect(vogal("a")).toBe("É vogal");
});
test("se a letra é vogal ou consoante", () => {
  expect(vogal("s")).toBe("É consoante");
});

//ex09

test("qual a media aritmetica dos 5 numeros", () => {
  expect(media("sadfas", 2, 3, 4, 5)).toBe("erro");
});
test("qual a media aritmetica dos 5 numeros", () => {
  expect(media(1, 3, 5, 7, 9)).toBe(5);
});
test("qual a media aritmetica dos 5 numeros", () => {
  expect(media(1, 5, 7, 23, 54)).toBe(18);
});


//ex10

test("se a senha e o usuario estão corretos", () => {
  expect(cadastro(1, 2)).toBe("Acesso negado! Usuário ou senha incorretos!");
});
test("se a senha e o usuario estão corretos", () => {
  expect(cadastro("Admin", "afasdf")).toBe("Acesso negado! Usuário ou senha incorretos!");
});
test("se a senha e o usuario estão corretos", () => {
  expect(cadastro("Admin", "123")).toBe("Conectado com sucesso!");
});
test("se a senha e o usuario estão corretos", () => {
  expect(cadastro("Admin", " 123 ")).toBe("Acesso negado! Usuário ou senha incorretos!");
});
test("se a senha e o usuario estão corretos", () => {
  expect(cadastro("asdf", "123")).toBe("Acesso negado! Usuário ou senha incorretos!");
});
test("se a senha e o usuario estão corretos", () => {
  expect(cadastro("", "")).toBe("Acesso negado! Usuário ou senha incorretos!");
});