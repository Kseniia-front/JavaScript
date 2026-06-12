// Задача 1 - Топ поль-ли по кол-ву постов
// URL
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить поль-лей и посты
// для каждого поль-ля посчитать кол-во его постов
// отстортировать поль-лей по убыванию postsCount
// вернуть топ-3 поль-лей
// вывести результат
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
  const sortedUsers = result.sort((a, b) => b.postsCount - a.postsCount);
  const topUsers = sortedUsers.slice(0, 3);
  console.log(topUsers);
}
getUserWithPostsCount();
