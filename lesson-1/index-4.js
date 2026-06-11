// Задача 4 - Получить посты поль-ля
// URL https://jsonplaceholder.typicode.com/posts
// создать async функцию getPostsByUaser(userId)
// получить все посты по userId
// отфильтровать посты по userId
// вывести массив постов
async function getPostsByUser(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const result = posts.filter((post) => post.userId === userId);
  console.log(result);
}
getPostsByUser(5);
