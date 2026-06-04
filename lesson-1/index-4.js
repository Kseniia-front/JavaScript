// Задача 4 - Отложенная фильтрация данных
// создать функцию deLayedFilter(arr)
// отфильтровать поль-лей старшу 18
// добавить им поле isAdult = true
const usersData = [
  { name: "Alex", age: 20 },
  { name: "John", age: 17 },
  { name: "Kate", age: 25 },
];
function delayedFilter(arr) {
  setTimeout(function () {
    const result = arr.filter(function (user) {
      return user.age > 18;
    });
    result.forEach(function (user) {
      user.isAdult = true;
    });
    console.log(result);
  }, 1000);
}
delayedFilter(usersData);
