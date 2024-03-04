
// -------------data types in ts -------


// let num1 : Number = 23452566;
// let str : string = 'who are you';
// let isActive : boolean = true;

//  ---------------- "any" type in ts---------------

let anything;

anything : 1;
anything : 'any';
anything : false


function sample (val:any) {
    console.log(val);
    
}


// ---------------- array -------


let numbers : Number[] = [1,2,3,4]


// let sum = []  // this array will a 'any' array and we can assign any type of value to it


// let sum : Number[] = []  in this case the array is a number array this is how we can create a empty array with defined data type




// -------------- tuples ----------------


// it is a fixed length array where each element has a particular data type  

let user : [Number ,String] 

user = [1 , 'aswin']

console.log(user[0]);


// ------------- enums --------------

//  there are a list of constant values .. we can define a set of named constants using enums


// const small =1
// const medium = 2   instead of this we can use enums 
// const large =3 

// enum Size {small = 1 ,medium , large}

// console.log(Size.medium);

enum Signal {red = 'stop' , orange = 'ready' , green = 'go'}  // it can have string values also  if we use const before the enum the generator will give more optimiced js code 

let road1 :Signal = Signal.red

console.log(road1);



//  ------------------ function in ts ----------------


function givesum (val1 :number , val2:number): number{

    return val1 + val2
}

console.log(givesum(1,2));

