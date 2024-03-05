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
