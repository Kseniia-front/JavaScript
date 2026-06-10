// Задача 1 - Простая задержка
// создать функцию getMessage
// возвращает Promise
// через 1 секунду возвращет строку: "Привет"
// создать async функцию
// вызвать getMessage() через await
// вывести резултать в консоль
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Привет");
    }, 1000);
  });
}
async function showMessage() {
  const message = await getMessage();
  console.log(message);
}
showMessage();
