// Задача 1 - Назначить пользователям id
// Создать функцию addIds(arr)
// с помощью forEach добавляет каждому объекту после id
// возваращает обновленный массив
const users = [{ name: "Alex" }, { name: "John" }, { name: "Kate" }];
function addIds(arr) {
  arr.forEach(function (user, index) {
    user.id = index + 1;
  });
  return arr;
}
const userWithIds = addIds(users);
console.log(userWithIds);

// Задача 2 - Добавить статус онлайн
// создать функцию setOnlaineStatus(arr)
// если LastVisit <= 3, то onlain = true
// иначе onlain = false
// дабвить каждому объекту через forEach
const usersOnline = [
  { name: "Alex", lastVisit: 2 },
  { name: "John", lastVisit: 10 },
  { name: "Kate", lastVisit: 1 },
];
function setOnlineStatus(arr) {
  arr.forEach(function (user) {
    if (user.lastVisit <= 3) {
      user.online = true;
    } else {
      user.online = false;
    }
  });
  return arr;
}
const updatedUsers = setOnlineStatus(usersOnline);
console.log(updatedUsers);

// Задача 3 - Активные пользователи с телефонами
// создать функцию getValidUsers(arr)
// возвращает только тех, у кого isActiv = true и есть Phone
const userData = [
  { name: "Alex", isActive: true, phone: "123" },
  { name: "John", isActive: false, phone: null },
  { name: "Kate", isActive: true, phone: "456" },
];
function getValidUsers(arr) {
  const validUsers = arr.filter(function (user) {
    return user.isActive === true && user.phone !== null;
  });
  return validUsers;
}
const usersWithPhones = getValidUsers(userData);
console.log(usersWithPhones);

// Задача 4 - Дорогие и доступнфе товары
// создать функцию getAvaiLableExpensive(arr)
// вернуть товары дороже 1000 и которые есть в наличии
const shopItems = [
  { title: "Phone", price: 800, inStock: true },
  { title: "TV", price: 1500, inStock: false },
  { title: "Laptop", price: 1200, inStock: true },
];
function getAvaiLableExpensive(arr) {
  const avaiLableItems = arr.filter(function (item) {
    return item.price > 1000 && item.inStock === true;
  });
  return avaiLableItems;
}
const expensiveItems = getAvaiLableExpensive(shopItems);
console.log(expensiveItems);

// Задача 5 - Добавить описание пользователя
// создать функцию addDescription(arr)
// добавить каждому объекту поле description: имя и возвраст
const people = [
  { name: "Alex", age: 20 },
  { name: "John", age: 30 },
];
function addDescription(arr) {
  const peopleWithDescription = arr.map(function (person) {
    return {
      name: person.name,
      age: person.age,
      description: "Имя: ${person.name}, Возраст: ${person.age}",
    };
  });
  return peopleWithDescription;
}
const updatedPeople = addDescription(people);
console.log(updatedPeople);

// Задача 6 - Формирование статуса заказа
// создать функцию addSatus(arr)
// если Total > 1000, то status = Vip
// иначе status = обычный
const orderList = [
  { id: 1, total: 500 },
  { id: 2, total: 2000 },
];
function addStatus(arr) {
  const orderWithStatus = arr.map(function (order) {
    return {
      id: order.id,
      total: order.total,
      status: order.total > 1000 ? "Vip" : "Обычный",
    };
  });
  return orderWithStatus;
}
const updatedOrders = addStatus(orderList);
console.log(updatedOrders);

// Задача 7 - Проверка ролей
// Создать функцию checkRoles(arr, roles)
// добавить каждому пользователю поле hasEccess (true/false)
// true если его role есть в массиве roles
const roles = ["user", "admin", "moderator"];
const usersRoles = [
  { name: "Alex", role: "admin" },
  { name: "John", role: "guest" },
];
function checkRoles(arr, roles) {
  const usersWithAccess = arr.map(function (user) {
    return {
      name: user.name,
      role: user.role,
      hasAccess: roles.includes(user.role),
    };
  });
  return usersWithAccess;
}
const userWithCheckRoles = checkRoles(usersRoles, roles);
console.log(userWithCheckRoles);

// Задача 8 - Позиция категории
// создать функцию addCategoryIndex(arr, categories)
// добавить каждому объекту поле categoryIndex
const categories = ["tech", "food", "books"];
const productsData = [
  { title: "Laptop", category: "tech" },
  { title: "Pizza", category: "food" },
];
function addCategoryIndex(arr, categories) {
  const result = arr.map(function (item) {
    return {
      title: item.title,
      category: item.category,
      categoryIndex: categories.indexOf(item.category),
    };
  });
  return result;
}
const updatedProducts = addCategoryIndex(productsData, categories);
console.log(updatedProducts);

// Задача 9 - Найти и отметить пользователя
// создать функцию markUser(arr, name)
// найти индекс поль-ля по имени findIndex
// добавить найденному поль-лю поле selected = true
const userList = [{ name: "Alex" }, { name: "John" }, { name: "Kate" }];
function markUser(arr, name) {
  const index = arr.findIndex(function (user) {
    return user.name === name;
  });
  arr[index].selected = true;
  return arr;
}
const userIndex = markUser(userList, "John");
console.log(userIndex);

// Задача 10 - Проверка на ошибки
// создать функцию checkErrors(arr)
// если есть хотя бы одна ошибка
// добавить каждому объекту поле hasLobalError = true
// иначе false
const logs = [
  { message: "ok", isError: false },
  { message: "fail", isError: true },
];
function checkErrors(arr) {
  const hasError = arr.some(function (log) {
    return log.isError;
  });
  const logsWithGlobalError = arr.map(function (log) {
    return {
      message: log.message,
      isError: log.isError,
      hasGlobalError: hasError,
    };
  });
  return logsWithGlobalError;
}
const updatedLogs = checkErrors(logs);
console.log(updatedLogs);

// Задача 11 - Проверка завершения задач
// создать функцию markCompLetion(arr)
// если все задачи выполнены
// добавить каждому compLetedAll = true
// иначе false
const tasksList = [
  { title: "A", done: true },
  { title: "B", done: true },
];
function markCompLetion(arr) {
  const allTasksDone = arr.every(function (task) {
    return task.done === true;
  });
  const taskWithCompletion = arr.map(function (task) {
    return {
      title: task.title,
      done: task.done,
      completedAll: allTasksDone,
    };
  });
  return taskWithCompletion;
}
const completedTasks = markCompLetion(tasksList);
console.log(completedTasks);

// Задача 12 - Сборка объекта пользователей
// создать функцию toObject(arr)
// преобразовать массив в оьъект вида:
// {1: {id: 1, name: 'Alex}, 2: {...}}
// использовать reduce
const userArr = [
  { id: 1, name: "Ales" },
  { id: 2, name: "John" },
];
function toObject(arr) {
  const usersObject = arr.reduce(function (result, user) {
    result[user.id] = user;
    return result;
  }, {});
  return usersObject;
}
const userById = toObject(userArr);
console.log(userById);
