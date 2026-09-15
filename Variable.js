// {
//     var x =90;
// }
// console.log(x);


// function test(){
//     var x=30;
// }
// console.log(x);
// let x=10;

// var x=30;
// var x =45;
// console.log(x)   // redeclaration is allowed



// var x =30;
// x=90;
// console.log(x); // reassigning is allowed


// {
//     let x =30;
// }
// console.log(x);



// {
//     let x =30;
//     x=70;
//     console.log(x);
// }



// let x =20;                       // global scope
// {
//     let x=40;                       // block scope
//     console.log(x)
// }

// console.log(x)




// {
//     const x=20;
//     x=30;
//     console.log(x);
// }



// let x=200;
// let y="Ram";
// let sal=200.25



// let name= "ram";
// name=20000;
// console.log(name)


// let a;
// console.log(a);



// let x =123;
// let y ="Ramamam";
// let z='c';
// let flag = true
// let m = null;


// let bignumber = 65464565465445785478458n;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(flag));
// console.log(typeof(m));
// console.log(typeof(bignumber));






//practice

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// let y = null;
// console.log(typeof null); // "object" — famous JS bug!






// if (true) {

//   var a = 10;

// }

// console.log(a);


// console.log(x);

// let x = 10;





// var a = 10;

// function test() {

//   console.log(a);

//   var a = 20;
// }

// test();





// let a = 10;

// function test() {

//   console.log(a);

//   let a = 20;

// }

// test();



// const obj = { name: "Priya" };

// obj.name = "Reddy";

// console.log(obj.name);


// 1. object - key value pairs

let persondetails={
    name1 :"Rama",
    address:"ramnagar"

};
console.log(persondetails.name1);

console.log(persondetails["address"]);


// 2. Array - collection of elements

let arrayofNumbers = [1,2,3,4,5]

let arrayofdifferentTypes=[1,"hello",true]

console.log(arrayofNumbers[2]);



// 3. function 

function printString(){
    console.log("hello");
}
printString();


function add(a,b){
    return a+b;
}

console.log(add(2,3));



// assigment operators

let a = 20;
let b =50;


a=30;


a=+5;  // a = a+5;

console.log(a);

// increment and decrement 

// postincrement 

let x = 20;
console.log(x++); // 20
console.log(x); // 21   



// preincrement

let y=30;
console.log(++y); //31
console.log(y); // 31



//comparison operator 
//comparing two variables

// ==
// ===
// !=
// !==
// >
// <
// >=
// =<


// comparison

let m = "5";
let n =5;
let number2= 13;
console.log(m==n); // true
console.log(m===n); // false

console.log(number2>n);
console.log(number2>m);

let age = 20;
let hasId = true;

console.log((age>18 &&hasId))


let ageofperson=9;
let gender = "male";
if(ageofperson>=18 && gender==='male'){
    console.log("allow to college")
}else{
    console.log("dont allow to college")
}





