// Задача 1 - Карточка пользователя
// Создай объект "user", у которого будут свойства:
// name (строка)
// age (число)
// isAdmin (булевое значение)

const user = {
  name: "Ксюша",
  age: 28,
  isAdmin: false,
};
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

// Задача 2 - Добавление и изменение
// Создай объект car с маркой и годом выпуска
// Добавь к нему свойство color
// Измени год выпуска

const car = {
  brand: "BMW",
  year: 2020,
};
car.color = "black";
car.year = 2024;
console.log(car);

// Задача 3 - Вложенные объекты
// Создай объект "order", у которого:
// есть вложенный объект "customer" c полями "name" и "phone"
// есть вложенный объект "shipping" с полями "city" и "zip"

const order = {
  customer: {
    name: "Ксюша",
    phone: "+79617626585",
  },

  shipping: {
    city: "Екатеринбург",
    zip: "620000",
  },
};

console.log(order.customer);
console.log(order.shipping);

// Задача 4 - Объект как база данных
// Создай объект "products", где ключами будут названия товаров,
// Получи цену конкретного товара по ключу.
// Добваь новый товар и выведи обновлённый объект.

const products = {
  book: 500,
  pensil: 50,
};
console.log("Товар: book, цена - " + products.book);
console.log("Товар: pensil, цена - " + products.pensil);

products.notebook = 150;
console.log(products);

// Задача 5 - Рельный заказ
// Создай объект "fullOrder", в котором:
// buyer : содержит поля - name, email, phone
// shipping : содержит поля - city, adres, shipMethod
// payment : содержит поля - paymentMethod, status

const fullOrder = {
  buyer: {
    name: "Ксюша",
    email: "ksyusha@mail.ru",
    phone: "+79617626585",
  },
  shipping: {
    city: "Екатеринбург",
    adress: "Ленина 50",
    shipMethod: "Курьер",
  },
  payment: {
    paymentMethod: "Карта",
    status: "Оплачено",
  },
};
console.log(fullOrder);

fullOrder.buyer.name = "Анна";
fullOrder.buyer.email = "anna@mail.ru";
fullOrder.buyer.phone = "+799999999";

fullOrder.shipping.city = "Москва";
fullOrder.shipping.adress = "Пушкина 10";
fullOrder.shipping.shipMethod = "Самовывоз";

fullOrder.payment.paymentMethod = "Наличные";
fullOrder.payment.status = "В ожидании";
console.log(fullOrder);

// Задача 6 - Метод приветствия
// создай объект person, у которого будут свойства:
// name
// age
// Добавь метод greet(massage)
// Выводит в консоль: massage, меня зовут name

const person = {
  name: "Ксюша",
  age: 28,
  greet: function (message) {
    console.log(message + ", меня зовут " + this.name);
  },
};
person.greet("Привет");

// Задача 7 - Подсчёт стоимости корзины
// Создай объект cart. у которого:
// есть свойство items
// Добавь метод getTotal(discount)
// принимает число discount
// считает сумму всех товаров
// применяет скидку
// возвращает итоговую сумму

const cart = {
  items: [100, 200, 300],

  getTotal: function (discount) {
    let sum = 0;
    sum = this.items[0] + this.items[1] + this.items[2];
    let finalPrise = sum - (sum * discount) / 100;
    return finalPrise;
  },
};
console.log(cart.getTotal(10));

// Задача 8 - Обновление данных пользователя
// Создай объект profile, у которого:
// username
// email
// Добавь метод update
// принимает название поля и новое значение
// изменяет соответствующее поле объекта
// выведи объект в консоль до и после изменения

const profile = {
  username: "Ksyusha",
  email: "Ksyusha@mail.ru",
  update: function (field, value) {
    this[field] = value;
  },
};
console.log(profile);
profile.update("username", "Anna");
profile.update("email", "anna@mail.ru");
console.log(profile);
