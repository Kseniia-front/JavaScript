// Задача 3 - Обогащение комментариев
// URL
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/posts
// создать async
// получить комментарии и посты
// добавить к каждому комментраию поле postTitle
// вернуть новый массив
async function getCommentsAndPosts() {
  const commentsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const postsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const comments = await commentsresponse.json();
  const posts = await postsresponse.json();
  const result = comments.map((comment) => {
    const post = posts.find((post) => post.id === comment.postId);
    return {
      ...comment,
      postTitle: post.title,
    };
  });
  console.log(result);
}
getCommentsAndPosts();
