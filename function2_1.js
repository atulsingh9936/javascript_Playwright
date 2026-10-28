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


   let sayHelloShortHand= str =>console.log("Hello"+str);


   let sumoftwonumbers1=(x,y)=>(x+y);
   let productoftwonumbers=(x,y)=>(x*y);



   // anonymous function( the function without a name is call anonymous function)
   // function can be stored
// synchronous and async function
console.log("ravi")
const callingfunction=  setTimeout(function(){console.log("this is executed after 3 second")},3000)
console.log("ramu")



 // IIFE(immediately invoked function expression)


 (function(){
    console.log("this is IIFE")
 })();

 // call back function

 // a function is passed as a parameter to another function, and that passed function can be executed later
   function greet(name,callback){
    console.log("hello"+name)
    callback();
   }

 function sayBye(){
    console.log("good bye");
 }


 greet("QA Masters",sayBye); // function calling 




 function add(a, b) {
  return a + b;
}

let result3 = add(5);
console.log(result3);


function test() {
    console.log("Hello");
  return;
  
}

console.log(test());







function checkEvenodd1(num){
    return num%2===0? "even":"odd";
}

console.log(checkEvenodd1(5));



function reverseString1(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
}

         return reverse;
}
console.log(reverseString1("Hello"));



