import {questionStr} from "./utils";

async function main() {
    let nome: string = await questionStr('Olá, digite seu nome na linha a seguir:')

    console.log(`Olá,${nome}, como vocẽ está?`)

    let bem: string = await questionStr('Como vocẽ está se sentindo hoje?')
    bem = bem.trim()

    if(bem === 'Estou Bem' || bem === 'estou bem') {
        console.log(`Que bom que voçé está se sentindo bem!!`)
    } else {
        console.log('Puxa vida! Oque eu posso fazer para voçẽ se sentir melhor?')
    }
}

main();
