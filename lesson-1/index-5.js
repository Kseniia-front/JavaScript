// Задача 5 - Два вызова подряд
// создать функции
// 1. getA() Promise с числом 2
// 2. getB() Promise с числом 3
// создать async функцию
// вызвать обе функции через await
// сложить результаты
// вывести сумму
function getA() {
  return new Promise((resolve) => {
    resolve(2);
  });
}
function getB() {
  return new Promise((resolve) => {
    resolve(3);
  });
}
async function showSum() {
  const a = await getA();
  const b = await getB();
  const sum = a + b;
  console.log(sum);
}
showSum();
