// Задача 2 - Комментарии только к длинным постам
// URL
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// создать async
// получить посты и комменты
// отфильтровать посты, у которых длина боди > 150
// оставить только комменты, относящиеся к этим постам
// вернуть массив таких комментов
// дополнительно добавить каждому комменту поле postId
// вывести результат
async function getPostsAndComments() {
  const postsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const commentsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const posts = await postsresponse.json();
  const comments = await commentsresponse.json();
  const longPosts = posts.filter((post) => post.body.length > 150);
  const result = comments.filter((comment) => {
    return longPosts.some((post) => post.id === comment.postId);
  });
  console.log(result);
}
getPostsAndComments();
