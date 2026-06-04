// Задача 3 - Имитация загрузки файлов
// создать функцию upLoadFiles(arr)
// каждые 1 секунду увеличивай progress каждого файла на 25
// вывести прогресс
// когда все файлы достигли 100 - остановить процесс
const files = [
  { name: "file1", progress: 0 },
  { name: "file2", progress: 0 },
];
function upLoadFiles(arr) {
  const intervalId = setInterval(function () {
    arr.forEach(function (file) {
      file.progress = file.progress + 25;
    });
    console.log(arr[0].progress, arr[1].progress);
    const allUploaded = arr.every(function (file) {
      return file.progress >= 100;
    });
    if (allUploaded) {
      clearInterval(intervalId);
    }
  }, 1000);
}
upLoadFiles(files);
