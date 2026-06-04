// Задача 1 - Система уведомлений
// создать функцию startNotifications(arr)
// каждую секунду показывать одно уведомление
// после показа помечать его как read = true
// когда все уведомления показаны - остановать интервал
const notifications = [
  { id: 1, message: "Новое сообщение", read: false },
  { id: 2, message: "Обновление профиля", read: false },
];
function startNotifications(arr) {
  let index = 0;
  const intervalId = setInterval(function () {
    if (index >= arr.length) {
      clearInterval(intervalId);
      console.log(arr);
      return;
    }
    const notification = arr[index];
    console.log(notification.message);
    notification.read = true;
    index++;
  }, 1000);
}
startNotifications(notifications);
