// Примитивные типы
var isDone = false;
var age = 32;
var fio = "Alice Mc. Donald";

// Массивы
var list = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
list.push(99);
// list.push("99"); // Error
var a = names[2]; // a is a string

// Кортежи
var personTuple;
personTuple = ["Alice", 32]; // OK
// personTuple = [32, "Alice"]; // Error

// Перечисления
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 0] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
