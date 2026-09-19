
//  function expression

// const PrintHello = function(){
//     console.log("Hello this is the first program of function expression")
// }
// PrintHello();

// function expression

const functionwithparams= function(str){
    console.log(str);
}

functionwithparams("Rama")




const addingtwofunction =function (num1, num2){
console.log(num1+num2);
return num1+num2;
}


addingtwofunction(2,4);


// arrow function


const arrowPrintHello = ()=>{
    console.log("Hello this is the first program of function expression");
};

arrowPrintHello();

// arrow function without return type


let sumoftwonnumbers =(a,b)=>{
console.log(a+b);
}

sumoftwonnumbers(4,5);

// arrow function with return type


let sumoftwonumbersreturn=(x,y)=>{
    return x+y;
}

let result= sumoftwonumbersreturn(2,3);
console.log(result);


let sayhello = (str)=> {console.log("Hello"+str)};

sayhello("QA Masters")



if(true)
    console.log("this is one line if ")

let sayhelloShortHand= str => console.log("hello"+str);


let sumofnumbersReturnshortHand=(x,y)=>(x+y);
let productofnumbersReturnshortHand=(x,y)=>(x*y);


// arrow function and short hand arrow functions

// anonymous functions
// function can be stored 
// function can also be passed as parameter also to another function

// functional 
console.log("Ravi");
 setTimeout(function(){console.log("this is executed after 3 seconds")},10000)
console.log("Ramu")

// predefined
// user defined function

callingfunction();




// IiFE(Immediately invoked function expression)


(function(){
    console.log("this is IiFE");
}) ();



//callback function

// A function is passed as parameter to another function, and that passed function can be executed later


function greet(name, callback){
        console.log("hello "+name);
        callback();
}


function saybye(){
    console.log("Good bye");
}

greet("QA Masters",saybye);  // function calling 



let agecheck=(age)=>{
    if(age>18){
        console.log("elgible")
    }
}


agecheck(25);

//??
// leftside??rightside;
// if leftside is null, undefined=> it will return rightside value
// if leftside is not null , undefined=> left side value 


let name1= null;
console.log(name1 ?? "Guest");



let numbers =[1,2,3];
numbers.forEach(
    num=> console.log(num*10)
);



let flag = true;
console.log(!!flag)
