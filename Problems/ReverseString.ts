

function ReverseString(str:string): string{

    let rev : string =''

    let splited :string[] = str.split(' ')

    for(let i =0 ; i< splited.length; i++){
        rev +=  splited[splited.length - i- 1]
    }

    return rev
}


let str:string = 'hello world'

console.log(ReverseString(str));


//  buildin method 

// function reversestring(str:string){
//     let rev :string = ''
//     return rev = str.split(' ').reverse().join(' ')
// }


// let str:string ='hello world'

// console.log(reversestring(str));

