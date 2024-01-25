// const mensagem= ('olá mundo!');
// console.log(mensagem)
//
//
// let number1:number = 54
// let number2:number = 34
// let number3:number = 27
// console.log(number1 + number2 + number3)
//
//
// // ==> Variáveis [Type Annotations]
// let nome: string = 'Glaucia Lemos'
//
// if(nome === "sergio"){
//     console.log(`Olá, ${nome}`)
// } else {
//     console.log('Olá mundo')
// }

// let respostaDaMae: string = ''
// let respostaDoPai: string = ''

// function helloWorld() {
//     console.log("hello world")
// }

// function vouSairHojeV1(mae: string, pai: string){
//     if(mae === 'sim' && pai === 'sim') {
//         console.log('Vou sair')
//     } else {
//         console.log('Nao vou sair')
//     }
// }

// function vouSairHojeV2(mae: string, pai: string){
//     if(mae === 'sim' || pai === 'sim') {
//         console.log('Vou sair')
//     } else {
//         console.log('Nao vou sair')
//     }
// }

// vouSairHojeV1('sim', 'sim')
// vouSairHojeV1('sim', 'nao')
// vouSairHojeV2('sim', 'sim')
// vouSairHojeV2('sim', 'nao')





// // ==> Arrays [Type Annotations]
// let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
// console.log(animais)

// // ==> Objetos [Type Annotations]
// let carro: {
//   nome: string
//    ano: number
//    preco: number
// }

// carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
// console.log(carro)

// // ==> Functions [Type Annotation]
// function multiplicarNumero(num1: number, num2: number) {
//    return num1 * num2
// }

// let conclusao:boolean = true
// let pendencia:boolean = false

//  console.log(conclusao)
//  console.log(pendencia)

//  let tarefa:boolean = false

// // if

//  if(!tarefa) {
//  console.log('Concluiu a tarefa')
//  } else {
//      console.log('Não concluiu a tarefa')
//   }





// // ==> Exemplos: number

// let num1: number = 23.0
// let num2: number = 0x78CF
// let num3: number = 0o577
// let num4: number = 0b110001
//
// console.log('Number - Ponto Flutuante...: ', num1)
// console.log('Number - Hexadecimal...: ', num2)
// console.log('Number - Octal...: ', num3)
// console.log('Number - Binário...: ', num4)

// // ==> Exemplos: bigint

// let big1: bigint = 9007199254740991n
// let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n
// let big3: bigint = 0x20000000000003n
// let big4: bigint = 0o400000000000000003n

// console.log('Bigint...: ', big1)
// console.log('Bigint - Binário...: ', big2)
// console.log('Bigint - Hexadecimal...: ', big3)
// console.log('Bigint - Octal...: ', big4)





// let abc: string = 'pedro'
// let abcd: string = "pedro henrique"
// let abcde: string = `pedro henrique vaz`
// console.log(abc, abcd, abcde)

// let nomeCompleto: string = 'Glaucia Lemos'
// console.log(nomeCompleto)

// // ==> Exemplo 02 - Double Quotes

// let funcaoEmpresa: string = "Cloud Advocate em JavaScript"
// console.log(funcaoEmpresa)

// // ==> Exemplo 03 - Back Ticks

// let nomeEmpresa: string = 'Microsoft'
// let dadosFuncionario: string = `Seja bem-vinda ${nomeCompleto}! Você será ${funcaoEmpresa}
//    na empresa ${nomeEmpresa}`
// console.log(dadosFuncionario)





// ==> Exemplo 01 - Uso de Colchetes:

// let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// console.log(frutas[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):

// let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭']/;
// console.log(frutas1[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'

// let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
// console.log(idiomas);
// idiomas.push('Mandarim');
// console.log(idiomas);
// idiomas.push('Italiano');
// console.log(idiomas);

// ==> Exemplo 04 - Identificar tamanho do array - método 'length'

// let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
// console.log(idiomas1.length);

// ==> Exemplo 05 - Exemplo de Array com Spread Operator

// let listaNumeros = [0, 1, 2, 3, 4, 5];
// listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

// console.log(listaNumeros);

// ==> Exemplo 06 - Exemplo de Array com laço de iteração

// let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

// function funcaoLinguagens(linguagens:string[]) {
//     for (let i = 0; i < linguagens.length; i++) {
//         console.log(linguagensArray[i]);
    // }
// }

// funcaoLinguagens(linguagensArray);





// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

// let pessoa: [string, string, number];
// pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos'];

// console.log(pessoa);

// ==> Exemplo 02 - Acessando o valor da Tupla

// let pessoa1: [string, string, number];
// pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];

// console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
// let pessoa2: [nome: string, posicao: string, idade: number] = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];

// console.log(pessoa2);


// ==> Exemplo 04 - Usando Tuplas com Spread Operator

// let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// console.log(listaFrutas);

//==> Exemplo 05 - Lista Heterogênea de Tupla:

// let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
// console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas

// function listarPessoas(nomes: string[], idades: number[]) {
//     return [...nomes, ...idades];
// }

// let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
// console.log(resultado)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

// type Nome =
//     | [primeiroNome: string, sobrenome: string]
//     | [primeiroNome: string, nomeMeio: string, sobrenome: string]  // tipo Nome com pipes primeiroNome

// function criarPessoa(...nome: Nome) {
//     return [...nome];
// }

// console.log(criarPessoa('Glaucia', 'Lemos'));
// console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));





// ==> Exemplo 01: Numeric Enums (Enums Numérico)

// enum Idioma {
//     Portugues,
//     Espanhol,
//     Ingles,
//     Frances,
// }

// console.log(Idioma);

// ==> Exemplo 02: String Enums

// enum Dia {
//     Segunda = 'SEG',
//     Terca = 'TER',
//     Quarta = 'QUA',
//     Quinta = 'QUI',
//     Sexta = 'SEX',
//     Sabado = 'SAB',
//     Domingo = 'DOM',
// }

// console.log(Dia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

/*const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(5));*/

// const enum Comida {
//     Hamburguer = 'Hamburguer',
//     Massa = 'Massa',
//     Pizza = 'Pizza',
//     Torta = 'Torta',
//     Churrasco = 'Churrasco',
// }

// function comida(c: Comida) {
//     return 'Comidas muito apetitosas!';
// }

// console.log(comida(Comida.Pizza));
// console.log(comida(Comida.Churrasco));
// console.log(comida(5));

// ==> Exemplo 04: Quando usar enum?!
// enum Tarefa {
//     Todo,
//     Progress,
//     Done,
// }

// const concluidaTarefa = {
//     id: 1,
//     status: Tarefa.Done,
//     descricao: 'Parabéns! Tarefa concluída com sucesso!',
// };

// if (concluidaTarefa.status === Tarefa.Done) {
//     console.log('Enviar e-mail: Tarefa Concluída!');
// }

// const a:any = 88
// const b:any = ['abc']
// const c = a + b
// console.log(c)





// ==> Exemplo 01: Tipo Any
// const a: any = 34;
// const b: any = ['Glaucia'];

// const result = a + b;
// console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

// const formulario: { [campoFomulario: string]: any } = {
//     nome: 'Glaucia',
//     sobrenome: 'Lemos',
//     idade: 34,
// };

// console.log(formulario);





// ==> Exemplo 01: Tipo Unknown

// let valorVariavel: unknown;  // inferir

// valorVariavel = true;   // atribuir
// valorVariavel = 123;
// valorVariavel = [];
// valorVariavel = 'Oi! Tudo bem?';

// console.log(valorVariavel);

// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

// let valor: unknown;

// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'

// let algumaCoisaAny: any;
// let algumaCoisaUnknown: unknown;

 // console.log(algumaCoisaAny.toFixed());

 // if (typeof algumaCoisaUnknown === 'number') {  // verificacao que diz ao algumaCoisaUnknown que vai ser um numero
 //   console.log(algumaCoisaUnknown.toFixed());  // tofixed espera um numero dentro dos cochetes
// }





// ==> Exemplo 01 - funções:

function logError(errorMessage: string): void {
    console.log(errorMessage);
    // return errorMessage;
}

logError('Required field - Name!');

// ==> Exemplo 02 - funções:

const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

// ==> Exemplo void: variáveis

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);