// Задача 1 - Добавление элемента
// Создай массив fruits
// Создай функцию aadFruit(arr, fruit)
// Сохрани результат вызова функции в переменную и выведи ее в консоль
const fruits = ["banana", "orange"];
function addFruit(arr, fruit) {
  arr.push(fruit);
  return arr;
}
const result = addFruit(fruits, "apple");
console.log(result);

// Задача 2 - Удаление последнего
//Создай массив numbers
//Создай функцию removeLast(arr)
const numbers = [10, 20, 30, 40];
function removeLast(arr) {
  return arr.pop();
}
const removed = removeLast(numbers);
console.log(removed);
console.log(numbers);

// Задача 3 - Проверка наличия
// Создай массив users
//Создай функцию hasUser(arr, name)
const users = ["Alex", "Anna", "Max"];
function hasUser(arr, name) {
  return arr.includes(name);
}
const exists = hasUser(users, "Alex");
console.log(exists);

// Задача 4 - Получить индекс
// Создай массив colors
// Создай функцию getIndex(arr, color)
const colors = ["red", "blue", "green"];
function getIndex(arr, color) {
  return arr.indexOf(color);
}
const index = getIndex(colors, "red");
console.log(index);

// Задача 5 - Добавление в начало
// Создай массив tasks
// Создай функцию addTaskToStart(arr, task)
const tasks = ["Помыть посуду", "Сделать уроки"];
function addTaskToStart(arr, task) {
  arr.unshift(task);
  return arr;
}
const updatedTasks = addTaskToStart(tasks, "Сделать ДЗ");
console.log(updatedTasks);

// Задача 6 - Удаление первого элемента
// Создай массив messages
// Создай функцию RemoveFirst(arr)
const messages = ["Привет", "Как дела?", "Пока"];
function removeFirst(arr) {
  return arr.shift();
}
const first = removeFirst(messages);
console.log(first);
console.log(messages);

// Задача 7 - Преобразование в строку
// Создай массив words
// Создай функцию makeSentence(arr)
const words = ["Привет", "мой", "друг"];
function makeSentence(arr) {
  return arr.join(" ");
}
const sentence = makeSentence(words);
console.log(sentence);

// Задача 8 - Количество элементов
// Создай массив items
// Создай функцию getCount(arr)
const items = ["книга", "ручка", "тетрадь"];
function getCount(arr) {
  return arr.length;
}
const count = getCount(items);
console.log(count);

// Задача 9 - Уникальность элемента
// Создай массив emails
// Создай фукнцию addEmail(arr, email)
const emails = ["hello@mail.com", "user@mail.com"];
function addEmail(arr, email) {
  if (!arr.includes(email)) {
    arr.push(email);
  }
  return arr;
}
const updatedEmails = addEmail(emails, "test@maol.com");
console.log(updatedEmails);
