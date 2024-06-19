// Простой пример с дженериком в функции
function identity<T>(arg: T): T {
    return arg;
}

// Использование функций identity с различными типами
let output1 = identity<string>("Hello");
let output2 = identity<number>(42);

console.log(output1); // Hello
console.log(output2); // 42

// Пример 2: Пример с дженериком в массиве
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); //  Безопасно использовать свойство length, так как это массив
    return arg;    
}

// Использование функции longgingIdentity
let arrayOutput = loggingIdentity<number>([1, 2, 3, 4]);
console.log(arrayOutput); // [1, 2, 3, 4]

// Пример 3: Пример с дженериком в интерфейсе
interface GenericIdentityFn<T> {
    (arg: T): T;
} 

function identityFn<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identityFn;
console.log(myIdentity(10)); // 10

//  Пример 4: Пример с дженериком и множественными типами в функции
function combineArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    return [...arr1, ...arr2];
}

// Использование функций combineArrays
let combineArray = combineArrays<number, string>([1, 2, 3], ["a", "b", "c"]);
console.log(combineArray); // [1, 2, 3, "a", "b", "c"]

//  Пример 5: Пример с дженериками и ограничениями (constraints)
interface lengthwise {
    length: number;
}

function loggingIdentityWithConstraint<T extends lengthwise>(arg: T): T {
    console.log(arg.length); // Теперь мы знаем, что у аргумента есть свойство length
    return arg;    
}

//  Использование функции с ограничениями
console.log(loggingIdentityWithConstraint({ length: 10, value: 3 })); // { length: 10, value: 3 }

// Пример 6: Пример с джернериками и ключами объекта
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

//let person = { name: "John", age: 30 };
console.log(getProperty(person, "name")); // John
console.log(getProperty(person, "age"));  // 30

// Пример 7: Пример с дженериками и интерфейсами, использующими дженерики
interface Result<T> {
    success: boolean;
    data: T;
}

function createResult<T>(success: boolean, data: T): Result<T> {
    return {success, data };
}

//  Использование функций createResult с различными типами
let stringResult = createResult<string>(true, "Operation completed");
let numberResult = createResult<number>(false, 42);

console.log(stringResult); // { success: true, data: "Operation completed" }
console.log(numberResult); // { success: false, data: 42}

// Пример 8: Пример с дженериками в функции высшего порядка
function createArray<T>(length: number, value: T): T[] {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<number>(3, 5)); // [5, 5, 5]

// Пример 9: Пример с дженериком в асинхронных функциях
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Использование функции fetchData
async function displayUser() {
    try {
        // Обратите внимание на использование объекта типа { id: number; name: string }
        const user = await fetchData<{ id: number; name: string }>(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(user); // { id: 1, name: "Leanne Graham" }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

displayUser();

// Пример 10: Пример с дженериками и несколькими типами параметров
function merge<T, U>(obj1: T, obj2: U): T & U {
    let result = {} as T & U;
    for (let id in obj1) {
        (result as any)[id] = (obj1 as any)[id];
    } 
    for (let id in obj2) {
        if (!(obj1 as Object).hasOwnProperty.call(result, id)) {
            (result as any)[id] = (obj2 as any)[id];
        }
    }
    return result;
}

let mergedObject = merge({ name: "John" }, {age: 30});
console.log(mergedObject); // { name: "John", age: 30 }





