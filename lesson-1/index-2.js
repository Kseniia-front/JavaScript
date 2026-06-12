// Задача 2 - Поль-ли всех постов
// URL
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить поль-лей и посты
// найти поль-лей, у которых нет ни одного поста
// вернуть массив таких поль-лей
async function getUserWithPostsCount() {
  const usersresponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const postsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const users = await usersresponse.json();
  const posts = await postsresponse.json();
  const result = users.filter((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    return userPosts.length === 0;
  });
  console.log(result);
}
getUserWithPostsCount();
