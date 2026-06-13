// Задача 2 - Список задач
// создать функции:
// 1.saveTasks(tasks), сохраняет массив в ljcalStorage
// 2.loadTasks(), возвращает массив в localStorage
// 3.addTasks:
// загружает текущие задачи
// добавляет новую задачу
// сохраняет обратно
// возвращает обновленный массив
const tasks = [{ title: "Учить JS", done: false }];
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  const result = localStorage.getItem("tasks");
  const tasks = JSON.parse(result);
  return tasks;
}
function addTasks(task) {
  const result = loadTasks();
  result.push(task);
  saveTasks(result);
  return result;
}
saveTasks(tasks);
const result = addTasks({ title: "Практика", done: false });
console.log(result);
