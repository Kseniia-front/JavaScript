// Задача 4 - Фильтрация постов по длине
// URL
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить посты
// оставить только те, у которых длина body > 100 символов
// преобразовать результат в массив
// { id, shortBody } (первые 20 символов body)
// вывести результат
async function getPostsLine() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const filteredPosts = posts.filter((post) => post.body.length > 100);
  const result = filteredPosts.map((post) => {
    return {
      id: post.id,
      shortBody: post.body.slice(0, 20),
    };
  });
  console.log(result);
}
getPostsLine();
