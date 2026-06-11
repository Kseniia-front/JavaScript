// Задача 3 - Найти поль-лей
// URL https://jsonplaceholder.typicode.com/users
// создать async функцию findUserById(id)
// получить всех поль-лей
// найти поль-ля по id
// вывести его имя и email
async function findUserById(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const user = users.find((user) => user.id === id);
  console.log(user.name);
  console.log(user.email);
}
findUserById(3);
