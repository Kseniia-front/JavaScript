// Задача 3 - Имитация загрузки пользователя
// создать функцию loadUser
// возвращает Promise
// через 1,5 секунды возвращет объект
// { name: 'Alex', age: 20 }
// вывести имя поль-ля после получения
function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Alex",
        age: 20,
      });
    }, 1500);
  });
}
const user = loadUser();
user.then((data) => {
  console.log(data.name);
});
