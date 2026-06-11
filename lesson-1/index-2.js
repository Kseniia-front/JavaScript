// Задача 2 - Вывести имена поль-лей
// использовать тот же URL
// создать async
// получить поль-лей
// сформировать новый массиым только с именами
// вывести результат
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users.map((user) => user.name));
}
getUsers();
