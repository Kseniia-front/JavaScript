// Задача 1 - Поль-ли с последним постом
// URL
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить поль-лей и посты
// для каждого поль-ля
// найти его пост с макс. id (самый "последний")
// добавить поле LastPostTitle
// если постов нет- "нет постов"
// вернуть новый массив поль-лей
// вывести результат
async function getUsersAndPosts() {
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
    if (userPosts.length === 0) {
      return {
        ...user,
        lastPostTitle: "Нет постов",
      };
    }
    const lastPost = userPosts.reduce((acc, post) => {
      if (post.id > acc.id) {
        return post;
      }
      return acc;
    });
    return {
      ...user,
      lastPostTitle: lastPost.title,
    };
  });
  console.log(result);
}
getUsersAndPosts();
