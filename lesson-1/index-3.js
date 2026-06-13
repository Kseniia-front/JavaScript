// Задача 3 - Настройки поль-ля
// создать функции:
// saveSettings(settings)
// updateSetting(key, value)
// загружает настройки
// обновляет одно поле
// сохраняет обратно
// возвращает обновленный объект
const settings = {
  theme: "light",
  language: "ru",
};
function saveSettings(settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}
function updateSetting(key, value) {
  const result = localStorage.getItem("settings");
  const settings = JSON.parse(result);
  settings[key] = value;
  saveSettings(settings);
  return settings;
}
saveSettings(settings);
const result = updateSetting("theme", "dark");
console.log(result);
