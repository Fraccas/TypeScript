export {}; // fixes vs code throwing error 'cannot redeclare block-scoped var'

// string var
let myName:string = "Dalton Ward";

// const int var
const numStates:number = 50;

// int var
let sum:number = 5 + 4;

function sayHello() {
    console.log("hello world");
}

sayHello();

function checkAge(cName:string, age:number) {
    if (age < 21) {
        console.log("Sorry " + cName + ", you aren't old enough to view this page!");
    } 
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetables: Array<string> = ["Tomatoes", "Lettuce", "Squash"];

for (let v of vegetables) {
    console.log(v);
}

let peopleArray = [
    {
        name: "Matt",
        age: 15
    },
    {
        name: "Max",
        age: 35
    }, 
    {
        name: "Sally",
        age: 44
    }, 
    {
        name: "Toast",
        age: 24
    },
    {
        name: "Bekah",
        age: 18
    }
];

for (let p of peopleArray) {
    checkAge(p.name, p.age);
}

function getLength(msg:string) {
    console.log(msg.length);
    return msg.length;
}

let msgL:number = getLength("Hello World");

if (msgL % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

