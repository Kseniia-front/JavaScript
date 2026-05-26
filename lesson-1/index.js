// Задача 1 - с помощью метода массива выведи в консоль значение каждого элемента
const names = ["Alice", "Bob", "Charlie"];
names.forEach(function (name) {
  console.log(name);
});

// Задача 2 - Выведи в консоль имена с порядковым номером (начиная с 1)
names.forEach(function (name, index) {
  console.log(index + 1 + ". " + name);
});

// Задача 3 - Массив заказов
// Заказ 101 laptop
// Заказ 102 Phone
// ...
const orders = [
  { id: 101, product: "Laptop" },
  { id: 102, product: "Phone" },
  { id: 103, product: "Tablet" },
];
orders.forEach(function (order) {
  console.log("Заказ #" + order.id + ": " + order.product);
});

// Задача 4 - Удвой все числв в массиве
// Верни новый массив: 2, 4, 6
const nums = [1, 2, 3];
const doubledNums = nums.map(function (num) {
  return num * 2;
});
console.log(doubledNums);

// Задача 5 - Из массива имён создай массив объектов
const arrayNames = ["Alice", "Bob"];
const namesInfo = arrayNames.map(function (name) {
  return {
    name: name,
    length: name.length,
  };
});
console.log(namesInfo);

// Задача 6 - У тебя массив пользователей users
// Создай новый массив строк вида Alice 20 лет, Bob 17лет
const users = [
  { name: "ALice", age: 20 },
  { name: "Bob", age: 17 },
];
const userStrings = users.map(function (user) {
  return user.name + " (" + user.age + " лет)";
});
console.log(userStrings);

// Задача 7 - Отфильтровать пользователей старше 18 лет
const dataUsers = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];
const adultUsers = dataUsers.filter(function (user) {
  return user.age > 18;
});
console.log(adultUsers);

// Задача 8 - У тебя массив заказов, нужно оставить только те, где статус - delivered
const dataOrders = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending" },
  { id: 3, status: "delivered" },
];
const deliveredOrders = dataOrders.filter(function (order) {
  return order.status === "delivered";
});
console.log(deliveredOrders);
