// string var
var myName = "Dalton Ward";
// const int var
var numStates = 50;
// int var
var sum = 5 + 4;
function sayHello() {
    console.log("hello world");
}
sayHello();
function checkAge(cName, age) {
    if (age < 21) {
        console.log("Sorry " + cName + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var vegetables = ["Tomatoes", "Lettuce", "Squash"];
for (var _i = 0, vegetables_1 = vegetables; _i < vegetables_1.length; _i++) {
    var v = vegetables_1[_i];
    console.log(v);
}
var peopleArray = [
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
for (var _a = 0, peopleArray_1 = peopleArray; _a < peopleArray_1.length; _a++) {
    var p = peopleArray_1[_a];
    checkAge(p.name, p.age);
}
function getLength(msg) {
    console.log(msg.length);
    return msg.length;
}
var msgL = getLength("Hello World");
if (msgL % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
