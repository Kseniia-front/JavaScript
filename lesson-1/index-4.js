// Задача 4 - Обработка результата
// создать функцию getNumber()
// возвращает Promise с числом 10
// создать  async
// получить число через await
// умножить его на 2
// вывксти результат
function getNumber() {
  return new Promise((resolve) => {
    resolve(10);
  });
}
async function showNumber() {
  const number = await getNumber();
  const result = number * 2;
  console.log(result);
}
showNumber();
