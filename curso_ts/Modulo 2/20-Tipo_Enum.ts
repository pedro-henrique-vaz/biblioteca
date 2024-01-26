// ==> Exemplo 01: Numeric Enums (Enums Numérico)

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

console.log(Idioma)

// ==> Exemplo 02: String Enums

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

/*const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!'
}

console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))
console.log(comida(5));*/

const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

function comida(c: Comida) {
    return 'Comidas muito apetitosas!'
}

console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))
// console.log(comida(5))

// ==> Exemplo 04: Quando usar enum?!
enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
}

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!')
}