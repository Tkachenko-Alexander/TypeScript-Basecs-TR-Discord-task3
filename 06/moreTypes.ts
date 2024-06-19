interface Animal {
    name: string;
}

interface Bear extends Animal {
    hibernate: boolean;
}

// interface Dog extends Animal {
//     bark(): string;
// }

// interface Cat extends Animal {
//     mew(): string;
// }

type AnimalT = { name: string };
type BearT = Animal & { hibernate: boolean }; // Пересечение типов
type Dog = AnimalT & { bark(): string }; // Пересечение типов
type Cat = AnimalT & { mew(): string }; // Пересечение типов
type Pet = Dog | Cat; //  Объединение типов

// Пример с enum StatusCode
enum StatusCode {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500,
}

function handleResponse(status: StatusCode): void {
    switch (status) {
        case StatusCode.Success:
            console.log("Request was successful.");
            break;
        case StatusCode.NotFound:
            console.log("Resource not found.");
            break;
        case StatusCode.InternalServerError:
            console.log("Internal server error.");
            break;
    }
}

// Пример с union
type User = {
    id: number;
    name: string;
};

type Admin = {
    id: number;
    name: string;
    isAdmin: boolean;
};

type Person = User | Admin;

function getPersonInfo(person: Person): string {
    if ("isAdmin" in person) {
        return `${person.name} is an admin.`;
    } else {
        return `${person.name} is a user.`;
    }
}

// Пример с литеральными типами
type HTTPMethod = "POST" | "GET";

function makeRequest(method: HTTPMethod): void {
    if (method === "POST") {
    console.log("Making a POST request");
    } else if (method === "GET") {
        console.log("Making a GET request");
    }
}

// Примеры с typeAlias
type Point = {
    x: number;
    y: number;
};

function printPoint(point: Point): void {
    console.log(`Point coordinates are (${point.x}, ${point.y})`);
}




// Примеры использования функций
handleResponse(StatusCode.Success);
console.log(getPersonInfo({ id: 1, name: "Alice", isAdmin: true}));
makeRequest("GET");
printPoint({ x: 10, y: 20 });