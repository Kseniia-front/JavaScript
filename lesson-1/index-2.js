// Задача 2 - Авто-сохранение формы
// создать функцию autoSave(form)
// менять isSaved на true
// вывести "Форма сохранена"
// если поле уже true - не дублируй вывод
// остановить через 2 сохранения
const form = {
  name: "Alex",
  email: "test@mail.com",
  isSaved: false,
};
function autoSave(form) {
  let count = 0;
  const intervalId = setInterval(function () {
    if (form.isSaved === false) {
      form.isSaved = true;
      console.log("Форма сохранена");
    }
    count++;
    if (count >= 2) {
      clearInterval(intervalId);
    }
  }, 3000);
}
autoSave(form);
