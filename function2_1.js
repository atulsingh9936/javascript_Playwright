function add (num1, num2){
    return num1+num2;
}

let result=add(2,3)

console.log(10+add(2,3));


// functions with return type
// function without return type
// function without parameters
// function with parameters



// function expression
// you can store a function into a variable


const printHello = function (){
    console.log("hello this is the first program of function expression")
}

printHello();


const fewithPrameter = function (str){
    console.log(str);
}

fewithPrameter("Rama");





const addtwonumbers=function (a,b){
return a+b;
}
   
let result1 =addtwonumbers(5,10)
console.log(result1);



// arrow function
const arrowprintHello = ()=>{
    console.log("hello this is the first program of function expression")
}

arrowprintHello();



// which take two parameters and calculates sum of it and it will return 
let sumoftwonumbers=(a,b)=>{
    console.log(a+b);
    }
    sumoftwonumbers(5,7);




let addtwonumbersarrow=(x,y)=>{
    let z = x+y;
    return z;
    }
   let resultarrow= addtwonumbersarrow(2,3)
   console.log(resultarrow);



   let stringappend =(str)=>{
    console.log("Hello "+ str)
   }

   stringappend("Atul")
