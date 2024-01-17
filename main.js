const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
});

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function (age) {
    return age % 2 === 0;
});

const sumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0);

console.log(sumOfAges);



for (let index = 1; index <= 20; index++) {
    console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});



let index = 0;

while (index < 10) {
    console.log("index é menor do que 10!");
    // index = index + 1;
    // index += 1

    // Mesma coisa que acima
    index++;
}

const person = {
    name: "Jane",
    age: 21,
};

for (property in person) {
    console.log(person[property]);
}



for (let index = 1; index <= 20; index++) {
    console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});