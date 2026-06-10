// Задача 1 - Простой промис
// создать функцию getMessage
// возвращает Promise
// через 1 секунду resolve со строкой: Привет из промиса
// сохранить резултат в переменную и вывести через then
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Привет из промиса");
    }, 1000);
  });
}
const result = getMessage();
result.then((message) => {
  console.log(message);
});
