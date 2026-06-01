// Задача 1 - Обогащение заказов данными пользователей
// создать функцию attachUserToOrders
// с помощью forEach пройдись по orders
// добавить в каждый заказ поле userName
// если поль-тель не найден, то userName=Unknow
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
];
const orders = [
  { id: 101, userId: 1, total: 500 },
  { id: 102, userId: 2, total: 1500 },
  { id: 103, userId: 1, total: 700 },
];
function attachUserToOrders(orders, users) {
  orders.forEach(function (order) {
    const user = users.find(function (user) {
      return user.id === order.userId;
    });
    if (user) {
      order.userName = user.name;
    } else {
      order.userName = "Unknow";
    }
  });
  return orders;
}
const ordersWithUsers = attachUserToOrders(orders, users);
console.log(ordersWithUsers);

// Задача 2 - Формирование профиля пользователя
// создать функцию buildProfiles(arr)
// для каждого поль-ля
// добавить поле hobbiesCount
// добавить поле isAdult (age >=18)
// добавить поле summary: Alex (20) - 2 hobbies
const userData = [
  {
    name: "Alex",
    age: 20,
    hobbies: ["sport", "music"],
  },
  { name: "John", age: 30, hobbies: ["reading"] },
];
function buildProfiles(arr) {
  const profiles = arr.map(function (user) {
    return {
      name: user.name,
      age: user.age,
      hobbies: user.hobbies,
      hobbiesCount: user.hobbies.length,
      isAdult: user.age >= 18,
      summary:
        user.name + " (" + user.age + ") - " + user.hobbies.length + " hobbies",
    };
  });
  return profiles;
}
const userProfiles = buildProfiles(userData);
console.log(userProfiles);

// Задача 3 - Фильтрация сложных заказов
// создать функцию getValidOrders(arr)
// у которых есть хотя бы 1 товар (items.length > 0)
// статус = delivered
// total > 1000
const ordersData = [
  {
    id: 1,
    items: ["phone", "case"],
    total: 800,
    status: "delivered",
  },
  {
    id: 2,
    items: [],
    total: 0,
    status: "pending",
  },
  {
    id: 3,
    items: ["laptop"],
    total: 2000,
    status: "delivered",
  },
];
function getValidOrders(arr) {
  const getValidOrders = arr.filter(function (order) {
    return (
      order.items.length > 0 &&
      order.status === "delivered" &&
      order.total > 1000
    );
  });
  return getValidOrders;
}
const filteredOrders = getValidOrders(ordersData);
console.log(filteredOrders);
