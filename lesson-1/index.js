// Задача 1
let age = 17;
if (age < 18) {
  console.log("Доступ запрещён");
} else {
  console.log("Добро пожаловать!");
}

// Задача 2.1 - чётное или нечётное
let number = 8;
if (number % 2 === 0) {
  console.log("Число чётное");
} else {
  console.log("Число нечётное");
}

// Задача 2.2 - проверка пароля
let password = "12345";
if (password === "qwerty") {
  console.log("Доступ разрешён");
} else {
  console.log("Неверный пароль");
}

// Задача 3 - рабочий день или выходной
let day = "суббота";
if (day === "суббота" || day === "воскресенье") {
  console.log("Выходной");
} else {
  console.log("Рабочий день");
}

// Задача 4 - доступ по статусу
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("Панель администратора");
} else {
  console.log("Нет доступа");
}

// Задача 5 - тёмная тема
let darkModeEnabled = false;
darkModeEnabled = !darkModeEnabled;
console.log(darkModeEnabled);

// Задача 6 - баллы и зачёт
let points = "78";
let result = points >= 60 ? "Зачёт" : "Не зачёт";
console.log(result);

// Задача 7 - показ имени
let username = "";
let nameToshow = username || "Гость";
console.log("Привет,", nameToshow);

// Задача 8 - разница между == и ===
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Задача 9 - выбор роли
let role = "user";
switch (role) {
  case "admin":
    console.log("Привет, админ!");
    break;
  case "moderator":
    console.log("Привет, модератор!");
    break;
  case "user":
    console.log("Привет, пользователь!");
    break;
  case "quest":
    console.log("Гость, войдите в систему");
    break;
  default:
    console.log("Роль не найдена");
}
