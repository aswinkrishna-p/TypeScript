// ----------- Type aliases -------------
var employeeDetails = {
    id: 1,
    name: 'aswin',
    contact: 1243,
    status: true
};
//  --------------- union types ---------------
// its where we can give multiple types to a variable of a function parameter
function typecheck(val1) {
    if (typeof val1 === 'number')
        console.log('its a number');
    else {
        console.log('its a string');
    }
}
typecheck(2);
typecheck('hello');
var obj = {
    print: function () { },
    write: function () { }
};
//  -------------- literal types --------------
//   literal types are used to specify a value rather than a type 
// let def : number = 10  instead of giving type number we give a exact value 
var len = 100; // we give the variable a value of 50 or 100 it cant be anything else
var avglength = 100;
//--------------- nullable types ---------------
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('error');
    }
}
greet(undefined);
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var gust = {
    firstname: 'iron',
    lastname: 'man'
};
fullname(gust);
// ---------- class --------------------
var student = /** @class */ (function () {
    function student(name) {
        this.studentname = name;
    }
    student.prototype.greet = function () {
        console.log("welcome to our campus ".concat(this.studentname));
    };
    return student;
}());
var stud = new student('aswin');
stud.greet();
