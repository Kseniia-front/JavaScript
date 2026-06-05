// Задача 1 - Постепенное удаление поль-ля
// создать функцию removeUsers
// каждые 1 секунду удалять одного поль-ля
// вывести "Удалён пользователь: Mike"
// когда массив остается пустым - останвоить процесс
const users = [
  { name: "Alex" },
  { name: "John" },
  { name: "Kate" },
  { name: "Mike" },
];
function removeUsers(arr) {
  const intervalId = setInterval(function () {
    const removedUser = arr.pop();
    console.log("Удален пользователь:", removedUser.name);
    if (arr.length === 0) {
      clearInterval(intervalId);
      console.log(arr);
    }
  }, 1000);
}
removeUsers(users);
