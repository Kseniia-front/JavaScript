// Задача 6 - Поиск активного поль-ля
// URL
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/comments
// создать async
// получить поль-лей и комментарии
// посчитать, сколько комментариев оставил каждый поль-ель (пo email)
// найти пол-ля с макс. кол-вом комментариев
// вывести его имя и кол-во комментариев
async function getMostActiveUser() {
  const usersresponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const commentsresponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const users = await usersresponse.json();
  const comments = await commentsresponse.json();
  const result = comments.reduce((acc, comment) => {
    if (!acc[comment.email]) {
      acc[comment.email] = 1;
    } else {
      acc[comment.email] += 1;
    }
    return acc;
  }, {});
  console.log(result);
}
getMostActiveUser();
