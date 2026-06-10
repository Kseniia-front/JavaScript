// Задача 2 - Проверка числа
// создать функцию checkNumber(num)
// возвращет Promise
// если num > 5 , то resolve("ok")
// иначе reject("ошибка")
// создать async функцию
// использовать try/catch для обработки
// вывести результат
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve("Ok");
    } else {
      reject("Ошибка");
    }
  });
}
async function checkResult() {
  try {
    const result = await checkNumber(10);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkResult();
