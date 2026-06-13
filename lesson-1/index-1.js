// Задача 1 - Сохранение поль-ля
// создать функцию saveUser(user)
// сохранить объект в LocalStorage (json.stringify)
// ключ "user"
// создать функцию getUser
// получить данные из LocalStorage
// преобразовать обратно в объект
// вывести в консоль
const user = {
  name: "Alex",
  age: 20,
};
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
function getUser() {
  const result = localStorage.getItem("user");
  const user = JSON.parse(result);
  console.log(user);
}
saveUser(user);
getUser();
