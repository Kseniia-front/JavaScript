// Задача 3 - Получение пользователя
// создать функцию getUser
// возвращает Promise
// возвращает объект
// { name: 'Alex', age: 20 }
// создать async
// получить поль-ля через await
// вывести его имя
function getUser() {
  return new Promise((resolve) => {
    resolve({
      name: "Alex",
      age: 20,
    });
  });
}
async function showUser() {
  const user = await getUser();
  console.log(user.name);
}
showUser();
