import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}, seja bem-vindo!`);

    rl.question('Qual sua idade? ', (idade) => {
        console.log(`Olá, voce tem ${idade} anos!`);
        rl.close();
    });
});




