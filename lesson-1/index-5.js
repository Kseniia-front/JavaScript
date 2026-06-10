// Задача 5 - Цепочка промисов
// создать функцию start()
// возвращает Promise с числом 2
// построй цепочку:
// сначала умножь на 3
// потом прибавь 4
// вывести итог
function start() {
  return new Promise((resolve) => {
    resolve(2);
  });
}
start()
  .then((number) => {
    return number * 3;
  })
  .then((number) => {
    return number + 4;
  })
  .then((result) => {
    console.log(result);
  });
