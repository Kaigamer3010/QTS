function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

//ex01
function valorMaior(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    if (a == b) {
      return "são iguais";
    }
    if (a > b) {
      return a;
    } return b;
  } return "erro";

}


//ex02
function parImpar(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    let texto = "";
    if (a % 2 == 0) {
      texto += `${a} é par e `;
    } else { texto += `${a} é ímpar e `; }
    if (b % 2 == 0) {
      texto += `${b} é par`;
    } else { texto += `${b} é ímpar`; }
    return texto;
  } return "Erro";
}


//ex03
function votar(n) {
  if (n < 0 || typeof n != "number") {
    return "erro"
  }
  if (n < 16) {
    return "Não pode votar"
  }
  if (18 <= n && n < 60) {
    return "Deve votar";
  } else {
    return "Pode votar"
  }
}

//ex04
function positivo(n) {
  if (typeof n == "number") {
    if (n < 0) {
      return "Negativo"
    }
    if (n == 0) {
      return "Zero";
    } return "Positivo"
  } return "erro"
}

//ex05
function bonus(n) {
  if (n < 0 || typeof n != "number") {
    return "erro"
  }
  if (n < 2000) {
    return ("bônus é de: " + n * 0.2 + "R$")
  }
  if (n < 5000) {
    return ("bônus é de: " + n * 0.1 + "R$")
  } else {
    return ("bônus é de: " + n * 0.05 + "R$")
  }
}

//ex06
function dirigir(n) {
  if (n < 0 || typeof n != "number") {
    return "erro"
  }
  if (n < 18) {
    return "Não pode dirigir"
  } else {
    return "Pode dirigir"
  }
}

//ex07
function semestre(n) {
  if (n < 0 || n > 12 || typeof n != "number") {
    return "erro"
  }
  if (n < 7) {
    return "1Semestre"
  } return "2Semestre"
}

//ex08
function vogal(s) {
  const alfabetoGeral = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  const vogal = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

  if (alfabetoGeral.includes(s)) {
    if (vogal.includes(s)) {
      return "É vogal";
    } return "É consoante";
  } return "erro";
}

//ex09
function media(a, b, c, d, e) {
  let vetor = [a, b, c, d, e];

  for (let i = 0; i < vetor.length; i++) {
    if(typeof vetor[i] != "number") {
      return "erro";
    }  
  }
  let media = 0;

  for (let i = 0; i < vetor.length; i++) {
    media += vetor[i]
  }

  return media / 5;
}


//ex10
function cadastro(u, s) {
  let user = "Admin";
  let senha = "123";

  if (u == user && s == senha) {
    return "Conectado com sucesso!"
  } else { return "Acesso negado! Usuário ou senha incorretos!" }
}



module.exports = { somar, mensagemBoasVindas, valorMaior, parImpar, votar, positivo, bonus, dirigir, semestre, vogal, media, cadastro };