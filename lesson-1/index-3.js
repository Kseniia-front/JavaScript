// Задача 3 - Имитация лайков
// создать функцию startLikes(arr)
// случайному посту увеличивай likes на 1
// вывести массив
// если какой-то пост достиг 5 лайков:
// добавить ему поле popular = true
// остановить процесс
const posts = [
  { id: 1, likes: 0 },
  { id: 2, likes: 0 },
];
function startLikes(arr) {
  const intervalId = setInterval(function () {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const post = arr[randomIndex];
    post.likes++;
    const popularPost = arr.find(function (post) {
      return post.likes >= 5;
    });
    if (popularPost) {
      popularPost.popular = true;
      clearInterval(intervalId);
      return;
    }
    console.log(arr);
  }, 1000);
}
startLikes(posts);
