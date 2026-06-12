// Задача 3 - Сатистика поль-ля
// URL
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// создать async getUserStats(userId)
// получить поль-лей, посты и комменты
// найти поль-ля по userId
// найти все его посты
// найти все комменты, которые относятся к его постам
// вернуть объект:
// { name: 'Alex', postsCount: X, commentsCount: Y }
// вывести результат
async function getUserStats(userId) {
  const usersresponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const postsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const commentsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const users = await usersresponse.json();
  const posts = await postsresponse.json();
  const comments = await commentsresponse.json();
  const user = users.find((user) => user.id === userId);
  const userPosts = posts.filter((post) => post.userId === userId);
  const userComments = comments.filter((comment) => {
    return userPosts.some((post) => post.id === comment.postId);
  });
  const result = {
    name: user.name,
    postsCount: userPosts.length,
    commentsCount: userComments.length,
  };
  console.log(result);
}
getUserStats(1);
