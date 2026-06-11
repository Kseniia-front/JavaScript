// Задача 6 - Комбинация поль-лей и постов
// URL https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить поль-лец
// получить посты
// каждому поль-лю добавить поле postsCount (кол-во постов)
// вывести обновленный массив
async function getUserWithPostsCount() {
  const usersresponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const postsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const users = await usersresponse.json();
  const posts = await postsresponse.json();
  const result = users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    return {
      ...user,
      postsCount: userPosts.length,
    };
  });
  console.log(result);
}
getUserWithPostsCount();
