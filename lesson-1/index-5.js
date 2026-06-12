// Задача 5 - Группировка постов по поль-лям
// URL
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить посты
// сгруппировать их в объект:
// { userId: [посты] }
// использовать reduce
async function getGroupedPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const result = posts.reduce((acc, post) => {
    if (!acc[post.userId]) {
      acc[post.userId] = [];
    }
    acc[post.userId].push(post);
    return acc;
  }, {});
  console.log(result);
}
getGroupedPosts();
