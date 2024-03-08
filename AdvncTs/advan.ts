


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

 //  -------------- literal types --------------

 //   literal types are used to specify a value rather than a type 


  // let def : number = 10  instead of giving type number we give a exact value 

let len : 50  | 100 = 100 // we give the variable a value of 50 or 100 it cant be anything else


type Length = 100 | 200  // this is called literal types


let avglength : Length = 100


//--------------- nullable types ---------------


 function greet(name : string | null | undefined){
     if(name){
        console.log(name.toUpperCase());
        
     }else {
        console.log('error');
        
     }
 }

 greet(undefined)


 // ------------ interface ----------------


 interface Person {
    firstname :string,
    lastname : string
 }



 function fullname (person:Person){
   console.log(`${person.firstname} ${person.lastname}`);
   
 }


 let gust  ={
    firstname:'iron',
    lastname: 'man'
 }    

 fullname(gust)


 // ---------- class --------------------


  class student {
     studentname : string

     constructor(name: string){
       this.studentname = name
     }

     greet(){
       console.log(`welcome to our campus ${this.studentname}`);
       
     }
  }


  let stud = new student('aswin')

  stud.greet()


  // ------------ inheritance in class -----------


  class teacher extends student {

      constructor(teachername: string){
         super(teachername)
      }

      teacherGreet(){
         console.log(`welcome to the school ${this.studentname}`);
         
      }
  }

  let ts = new teacher('vivek')

  ts.greet()
  ts.teacherGreet()
  console.log(ts.studentname);
  