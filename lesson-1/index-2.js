// Задача 2 - Симуляция очереди заказов
// создать функцию processOrders(arr)
// обрабатывать заказы по одному с помощью setInterval
// каждый раз меняй статус одного заказа на done
// вывести в консоль какой заказ обработан
// когда все заказы обработаны - остановить инетрвал
const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "pending" },
  { id: 3, status: "pending" },
];
function processOrders(arr) {
  let index = 0;
  const intervalId = setInterval(function () {
    if (index >= arr.length) {
      clearInterval(intervalId);
      console.log(arr);
      return;
    }
    const order = arr[index];
    order.status = "done";
    console.log("Заказ " + order.id + " обработан");
    index++;
  }, 1000);
}
processOrders(orders);
