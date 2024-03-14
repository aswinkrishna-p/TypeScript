function ReverseString(str) {
    var rev = '';
    var splited = str.split(' ');
    for (var i = 0; i < splited.length; i++) {
        rev += splited[splited.length - i - 1];
    }
    return rev;
}
var str = 'hello world';
console.log(ReverseString(str));
//  buildin method 
// function reversestring(str:string){
//     let rev :string = ''
//     return rev = str.split(' ').reverse().join(' ')
// }
// let str:string ='hello world'
// console.log(reversestring(str));
