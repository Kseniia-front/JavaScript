// Задача 2 - Успех или ошибка
// создать функцию checkNumber(num)
// возвращает Promise
// если num > 10 , то resolve(число больше 10)
// иначе reject(число слишком маленькое)
// вызвать функцию и обработать результат через then и catch
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Число больше 10");
    } else {
      reject("Число слишком маленькое");
    }
  });
}
const number = checkNumber(9);
number
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
