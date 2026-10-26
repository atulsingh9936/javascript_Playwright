let str = "  Rama is learning playwright  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log(" Rama  ".trim())
console.log(" Rama  ".trimEnd());

console.log("  Rama  ".trimStart());



// includes

console.log("Rama is good.".includes("is"));

console.log("https://google.com".startsWith("https"));

// endswith
// indexof
// string is collection of character
//playwright



console.log("Playwright".indexOf("t"));

console.log("Playwright".indexOf("ght"));

console.log("Playwright".indexOf("gjk"));   -1



// endsWith


let file = "import.pdf";
let file1 = "import.pdf";
console.log(file1.endsWith("df"))
console.log(file.endsWith(".pdf"))
console.log(file.endsWith(".xslx"))


console.log("Testing".charAt(0));
console.log("Testing".charAt(5));


console.log("Testing".charAt(20));


console.log("I am Ravi".includes("R",7));



let i =1;
while(i<=10){
    console.log(i)
}




let num2=20;
do{
console.log(num2)
}while(num2<20)



    for(let i =1;i<=10;i++){
        if(i!==6){
            console.log(i)
        }
    }