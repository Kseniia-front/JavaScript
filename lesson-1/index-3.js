// Задача 3 - Проверка неактивных поль-лей
// создать функцию markInactive(arr)
// пройтись по массиву и добавить поле isInactive
// true если LastSeen > 5
const usersLastSeen = [
  { name: "Alex", lastSeen: 2 },
  { name: "John", lastSeen: 10 },
  { name: "Kate", lastSeen: 5 },
];
function markInactive(arr) {
  setTimeout(function () {
    arr.forEach(function (user) {
      if (user.lastSeen > 5) {
        user.isInactive = true;
      } else {
        user.isInactive = false;
      }
    });
    console.log(arr);
  }, 2000);
}
markInactive(usersLastSeen);
