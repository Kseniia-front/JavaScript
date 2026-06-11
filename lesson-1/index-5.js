// Задача 5 - Сформировать описание постов
// URL https://jsonplaceholder.typicode.com/posts
// создать async
// получить посты
// преобразовать их в массив строк
// "Пост №1: заголовок..."
// вывести результат
async function getPostByUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const result = posts.map((post) => `Пост #${post.id}: ${post.title}`);
  console.log(result);
}
getPostByUser();
