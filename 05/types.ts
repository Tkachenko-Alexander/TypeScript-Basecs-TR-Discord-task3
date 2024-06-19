// Примитивные типы
let isDone: boolean = false;
let age: number = 32;
let fio: string = "Alice Mc. Donald";

// Массивы
let list: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
list.push(99);
// list.push("99"); // Error
let a = names[2]; // a is a string

// Кортежи
let personTuple: [string, number];
personTuple = ["Alice", 32]; // OK
// personTuple = [32, "Alice"]; // Error

// Перечисления
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// Интерфейсы
interface User {
    name: string;
    age: number;
    isActive: boolean;
    sayHello: () =>  string;
    getDetails: () => string;
}

// Класс
class Person implements User {
    constructor(
        public name: string,
        public age: number,
        public isActive: boolean
    ) {}

    sayHello(): string {
        return `Hello, my name is ${this.name}.`;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Active: ${this.isActive}`;
    }
}

// Функции
function add(a: number, b: number): number {
    return a + b;
} 

function greet(user: User): string {
    return `Hello, ${user.name}!`;
}

// Использование переменных и функций
let alice: User = new Person("Alice", 32, true);
console.log(alice.sayHello()); // Outputs: Hello, my name is Alice.
console.log(greet(alice)); // Outputs: Hello, Alice!
console.log(alice.getDetails()); // Outputs: Name: Alice, Age: 32, Active: true

let addResult: number = add(5, 10);
console.log(addResult); // Outputs: 15

console.log(isDone); // Outputs: false
console.log(age); // Outputs: 32
console.log(fio); // Outputs: Alice Mc. Donald
console.log(list); // Outputs: [1, 2, 3, 4, 5]
console.log(names); // Outputs: ["Alice", "Bob", "Charlie"]
console.log(alice.sayHello()); // Outputs: ["Alice", 32]
console.log(alice.sayHello()); // Outputs: 1 (true numeric value of Color.Green)







