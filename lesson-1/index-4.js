// Задача 4 - Обработка данных
// создать функцию getNumber
// возвращает Promise с числом 5
// в .then()
// умножить число на 2
// вывести результат
function getNumber() {
  return new Promise((resolve) => {
    resolve(5);
  });
}
getNumber().then((number) => {
  console.log(number * 2);
});
