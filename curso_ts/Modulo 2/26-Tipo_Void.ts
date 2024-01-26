// ==> Exemplo 01 - funções:

function logError(errorMessage: string): void {
    console.log(errorMessage)
    // return errorMessage
}

logError('Required field - Name!')

// ==> Exemplo 02 - funções:

const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage)
}

logErrorExample2('Required field - Surname')

// ==> Exemplo void: variáveis

let variavelExemploVoid: void
// variavelExemploVoid = 1
// variavelExemploVoid = null
variavelExemploVoid = undefined

console.log(variavelExemploVoid)

