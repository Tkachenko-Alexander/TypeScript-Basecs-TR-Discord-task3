// Пример и использованием void
function logMessage(message: string): void {
    console.log(message);    
}

// Пример с использованием any 
let uncertainValue: any = 42;
uncertainValue = "Теперь это строка";
uncertainValue = { key: "значение"};

// Пример с использованием never
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteloop(): never {
    while (true) {}
}

// Пример с использованием never внутри функции и switch
function processValue(value: number | string): string {
    switch (typeof value) {
        case "number":
            return `Number: ${value}`;
        case "string":
            return `String: ${value}`;
        default:
            // count _: never = value;
            return assertUnreachable(value);
    }
}

function assertUnreachable(x: never): never {
    throw new Error("Unexpected value: " + x);
}

// Класс с public/private/protected полями и методами
class Person {
    public name: string;
    private age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }

    private getAge(): number {
        return this.age;
    }

    protected getGender(): string {
        return this.gender;
    }
}

// Класс наследник с доступом к protected полю
class Employee extends Person {
    public position: string;

    constructor(name: string, age: number, gender: string, position: string) {
        super(name, age, gender);
        this.position = position;
    }

    public getDetails(): void {
        console.log(
            `Name: ${this.name}, Position: ${
                this.position
            }, Gender: ${this.getGender()}`
        );
    }
}

// Пример с необязательными полями
interface Address {
    street: string;
    city: string;
    country?: string; // Необязательное поле
}

const address: Address = {
    street: "Main St",
    city: "New York",
};

// Пример с оператором утверждения
let value: string | null = "Hello, TypeScript";
console.log(value!.toUpperCase()); // Оператор утверждения

value = null;
// console.log(value!.toUpperCase()); // Ошибка выполнения если не проверить на null

// Использование классов и функций
const person = new Person("Alice", 30, "female");
person.greet();

const employee = new Employee("Bob", 40, "male", "Developer");
employee.getDetails();

logMessage("This is a message.");

// Использование функций с типом never внутри функции
console.log(processValue(10)); // "Number: 10"
console.log(processValue("test")); // "String test"
// console.log(processValue(true)); // Это вызовет ошибку компиляции, так как assertUnreachable будет пойман на этапе компиляции













