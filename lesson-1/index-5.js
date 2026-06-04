// Задача 5 - Мониторинг состояния сервера
// создать функцию monitorServers(arr)
// каждые 2 секнды:
// случайно менять статус одного сервера (ok|error)
// вывести текущие статусы:
// если появится хотя бы один error:
// добавить всем серверам поле hasIsssue = true
// остановить мониторинг
const servers = [
  { name: "Server1", status: "ok" },
  { name: "Server2", status: "ok" },
];
function monitorServers(arr) {
  const intervalId = setInterval(function () {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const server = arr[randomIndex];
    server.status = "error";
    console.log(arr);
    const hasError = arr.some(function (server) {
      return server.status === "error";
    });
    if (hasError) {
      arr.forEach(function (server) {
        server.hasIssue = true;
      });
      clearInterval(intervalId);
      console.log(arr);
    }
  }, 2000);
}
monitorServers(servers);
