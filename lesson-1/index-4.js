// Задача 4 - Живое обновление корзины
// создать функцию watchCart(arr)
// каждые 2 секунды:
// добавлять случайный товар в массив
// пересчитывать общую сумму
// вывести "товар добавлен, сумма: Х"
// остановить процесс после 3 добавлений
const cart = [
  { title: "Phone", price: 500 },
  { title: "Case", price: 50 },
];
function watchCart(arr) {
  let count = 0;
  const intervalId = setInterval(function () {
    arr.push({
      title: "Mouse",
      price: 100,
    });
    let sum = 0;
    arr.forEach(function (item) {
      sum = sum + item.price;
    });
    console.log("Товар добавлен, сумма: " + sum);
    count++;
    if (count >= 3) {
      clearInterval(intervalId);
    }
  }, 2000);
}
watchCart(cart);
