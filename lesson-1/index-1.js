// Задача 1 - Отложенная активация поль-лей
// создать функцию activateUsers(arr)
// для каждого из поль-лей установить разную задержку
// через setTimeout меняй isActive на true
// при активации вывести: поль-ль Alex активирован
const users = [
  { name: "Alex", isActive: false },
  { name: "John", isActive: false },
  { name: "Kate", isActive: false },
];
function activateUsers(arr) {
  arr.forEach(function (user, index) {
    setTimeout(
      function () {
        user.isActive = true;
        console.log("Пользователь " + user.name + " активирован");
      },
      (index + 1) * 1000,
    );
  });
  setTimeout(function () {
    console.log(arr);
  }, 4000);
}
activateUsers(users);
