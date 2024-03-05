


// ----------- Type aliases -------------

type Employee = {
    id:number,
    name:string,
    contact:number,         //  its like creating a new name for a type  we can create type aliase for objects and reuse that with other objects
    status: boolean;
}


let employeeDetails : Employee = {
    id:1,
    name:'aswin',
    contact:1243,
    status:true
}



//  --------------- union types ---------------

// its where we can give multiple types to a variable of a function parameter


 function typecheck(val1:number|string ){
    if(typeof val1 === 'number')
        console.log('its a number');

    else{
        console.log('its a string');
        
    }
        
 }
 

 typecheck(2)
 typecheck('hello')


 // ------------ intersection types -------------

 type printable = {
    print: () => void
 }

 type writable = {
    write: () => void
 }


 type printableandwritable =  printable & writable     //  intersection


 const obj : printableandwritable ={
    print: () => {},
    write: () => {}
 }