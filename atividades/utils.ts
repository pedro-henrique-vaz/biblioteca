import readline from "readline";

export async function questionStr(query: string): Promise<string> {
    const rl = readline.promises.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let value: string = await rl.question(query);
    rl.close();

    return value.trim();
}

export async function questionNumber(query: string): Promise<number> {
    let value = await questionStr(query);
    let n = parseFloat(value);
    if(isNaN(n)) {
        console.log("O valor deve ser um número!")
        return questionNumber(query);
    }
    return n;
}
