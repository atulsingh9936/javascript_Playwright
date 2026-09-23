// string is a sequence or collection of characters

let str= "Rama";  // 


// ways to create a string 
// using double quotes

let course= "Playwright";

// using single quotes

let name = 'Ravi';

// using backtick quotes => template literal

let address= `India` ;
// you can access string directly  $(variable)


console.log(`name:${name} address:${address}`);
console.log("name:"+name + " "+"address :"+address);


// let persondetails=`
// Person details:
// name : ${name}
// address:${address}
// `;

// console.log(persondetails);


let persondetails=`
Person details:
name : ${name}
address: ${address}
`;
console.log(persondetails);



// strings are immutable( cannot be changed)


let a ='ramama';
let b ='a';



// strings are immutable( cannot be changed)


let word = 'hello';
word[0]="k";
console.log(word);


// concatenation

word='k'+"ello";
console.log(`changed string is ${word}`)


let word2="Kello";


let str1="Rama";   // string
let str2="rama";

console.log(str1==str2)


let str3 = new String("Rama");   // object
console.log(str3);


console.log(str1==str3);   // false


// predefined method to operate on strings