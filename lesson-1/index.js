// Задача 1
function sayHello(name) {
  console.log("Привет, " + name + "!");
}

sayHello("Аня");

// Задача 2
function square(num) {
  return num * num;
}

let result1 = square(2);
let result2 = square(5);
let result3 = square(10);

console.log(result1);
console.log(result2);
console.log(result3);

// Задача 3
function isBigger(a, b) {
  return a > b;
}

console.log(isBigger(10, 5));
console.log(isBigger(2, 8));

//Задача 4
function sayHi() {
  console.log("Привет!");
}

function doTwice(callback) {
  callback();
  callback();
}

doTwice(sayHi);

//Задача 5
function formatName(name) {
  return "Пользователь: " + name;
}

function greet(name) {
  console.log("Добро пожаловать, " + formatName(name));
}

greet("Лена");

//Задача 6
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(4));
