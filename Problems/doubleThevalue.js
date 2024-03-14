function doubleTheValue(val) {
    return val.map(function (val) { return val * 2; });
}
var arr = [1, 2, 3, 4, 5];
console.log(doubleTheValue(arr));
