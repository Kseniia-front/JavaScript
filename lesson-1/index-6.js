// Задача 6  - Постепенное начисление баланса
// создать функцию startBonus
// увеличивать баланс каждого поль-ля на 100
// вывести текущий баланс
// остановить процесс, когда у всех баланс >=300
// добавить поле isRich = true тем, кто достиг 300
const usersBalance = [
  { name: "Alex", balance: 0 },
  { name: "John", balance: 0 },
];
function startBonus(arr) {
  const intervalId = setInterval(function () {
    arr.forEach(function (user) {
      user.balance = user.balance + 100;
      if (user.balance >= 300) {
        user.isRich = true;
      }
    });
    console.log(arr[0].balance, arr[1].balance);
    const allRich = arr.every(function (user) {
      return user.balance >= 300;
    });
    if (allRich) {
      clearInterval(intervalId);
      console.log(arr);
    }
  }, 1000);
}
startBonus(usersBalance);
