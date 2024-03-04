"use strict";
let anything;
anything: 1;
anything: 'any';
anything: false;
function sample(val) {
    console.log(val);
}
let numbers = [1, 2, 3, 4];
let user;
user = [1, 'aswin'];
console.log(user[0]);
var Signal;
(function (Signal) {
    Signal["red"] = "stop";
    Signal["orange"] = "ready";
    Signal["green"] = "go";
})(Signal || (Signal = {}));
let road1 = Signal.red;
console.log(road1);
function givesum(val1, val2) {
    return val1 + val2;
}
console.log(givesum(1, 2));
//# sourceMappingURL=DataTypes.js.map