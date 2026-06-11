// Задача 1 - Получить список поль-лей
// использовать fetch
// https://jsonplaceholder.typicode.com/users
// создать async
// получить данные
// преобразовать в JSON
// вывести массив поль-лей в консоль
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}
getUsers();
