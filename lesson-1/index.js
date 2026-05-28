// Задача 1 - Объеденить клиентов и добавить id
const customers1 = [
  { name: "John", city: "London" },
  { name: "Maria", city: "Berlin" },
];
const customers2 = [
  { name: "Peter", city: "Paris" },
  { name: "Anna", city: "Madrid" },
];
const allCustomers = [...customers1, ...customers2].map(
  function (customer, index) {
    return {
      name: customer.name,
      city: customer.city,
      id: index + 101,
    };
  },
);
console.log(allCustomers);

// Задача 2 - Получить email активных заказов
const orders = [
  { id: 1, email: "user1@mail.com", isActive: true },
  { id: 2, email: "user2@mail.com", isActive: false },
  { id: 3, email: "user3@mail.com", isActive: true },
];
const activeEmails = orders
  .filter(function (order) {
    return order.isActive === true;
  })
  .map(function (order) {
    return order.email;
  });
console.log(activeEmails);

// Задача 3 - Сформировать описание товаров
const products = [
  { title: "Laptop", price: 1000 },
  { title: "Phone", price: 600 },
];
const productDescriptions = products.map(function (product) {
  return "Товар: " + product.title + " - Цена: " + product.price;
});
console.log(productDescriptions);

// Задча 4 - Оставить клиентов с высоким балансом
// добавить каждому клиенту новое свойство isVip
// true - если больше или равен 1500
// false - если меньше
const clients = [
  { name: "Lena", balance: 900 },
  { name: "Dima", balance: 2000 },
  { name: "Max", balance: 1500 },
];
const vipClients = clients.map(function (client) {
  return {
    name: client.name,
    balance: client.balance,
    isVip: client.balance >= 1500,
  };
});
console.log(vipClients);

// Задача 5 - Названия товаров в наличии и дешевле 100
// найти товары только те, которые
// есть в наличии (true)
// стоят меньше 100
const items = [
  { title: "Backpack", inStock: true, price: 40 },
  { title: "Shoes", inStock: false, price: 80 },
  { title: "Watch", inStock: true, price: 120 },
];
const availableCheapItems = items
  .filter(function (item) {
    return item.inStock === true && item.price < 100;
  })
  .map(function (item) {
    return item.title;
  });
console.log(availableCheapItems);

// Задача 6 - Сгруппировать заказы по статусу
// разделить заказы по статусу в отдельные массивы внутри объекта
const ordersBystatus = [
  { id: 1, status: "pending" },
  { id: 2, status: "delivered" },
  { id: 3, status: "pendiing" },
  { id: 4, status: "cancelled" },
  { id: 5, status: "delivered" },
];
const result = ordersBystatus.reduce(function (acc, order) {
  if (acc[order.status] === undefined) {
    acc[order.status] = [];
  }
  acc[order.status].push(order);
  return acc;
}, {});
console.log(result);

// Задача 7 - Подсчитать количество товаров по категориям
// вернуть объект, в котором ключ - категория, а значение - количество товаров в ней
const products7 = [
  { name: "Laptop", category: "electronics" },
  { name: "Shirt", category: "clothing" },
  { name: "Phone", category: "electronics" },
  { name: "Pants", category: "clothing" },
  { name: "Blender", category: "home" },
];
const result7 = products7.reduce(function (acc, product) {
  if (acc[product.category] === undefined) {
    acc[product.category] = 0;
  }
  acc[product.category] = acc[product.category] + 1;
  return acc;
}, {});
console.log(result7);
