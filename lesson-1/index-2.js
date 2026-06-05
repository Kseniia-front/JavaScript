// Задача 2 - Ротация статусов задач
// создать функцию rotateStatuses(arr)
// каждые 2 секунды:
// менять статус каждой задачи по кругу (new, inProgress, done)
// вывести обновленный массив
// остановить после 3 полных циклов
const tasks = [
  { title: "Task 1", status: "new" },
  { title: "Task 2", status: "new" },
];
function rotateStatuses(arr) {
  let count = 0;
  const intervalId = setInterval(function () {
    arr.forEach(function (task) {
      if (task.status === "new") {
        task.status = "inProgress";
      } else if (task.status === "inProgress") {
        task.status = "done";
      } else if (task.status === "done") {
        task.status = "new";
      }
    });
    console.log(JSON.parse(JSON.stringify(arr)));
    count++;
    if (count >= 3) {
      clearInterval(intervalId);
    }
  }, 2000);
}
rotateStatuses(tasks);
