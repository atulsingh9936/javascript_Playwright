// intitialization only one time
// condition i<=5
// increment and decrement i++ everytime

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//     console.log(i)
//     }
// }



// while loop
// intilization
//while(condition){
// increment and decrement
//}

// let i =1;
// while (i<=5){
//     console.log(i);
//     i++;
// }



// do while 

// let j=15;
// do {
//     console.log(j);
//     j++;
// }while(j<=10)



// for of => to read the values from arrays or strings
// console.log("this is for of loop")
// let numarray =[2,10,20];

// for (let num of numarray){
//     console.log(num);
// }



// let str= "QAMASTERS";
// for (let letter of str){
//     console.log(letter);
// }

// for in => use object properties = by using this you can get the values

// let personobj ={

//     name:"Rama",
//     address:"india",
//     age:35
// };

// for(let key in personobj){
//     console.log(key);
//     console.log(personobj[key]);
// }


// console.log("learning break");
// for(let i=1;i<=10;i++){
//     if (i==7){
//         break;
//     }
//     console.log(i)
// }


// console.log("learning continue");
// //1,2,3,4,,5,7,8,9,10

// for(let i=1;i<=10;i++){
//     if (i==6){
//         continue ;
//     }
//     console.log(i);
// }


// let x =20;
// if(x=30){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let k=1;
// while(k<3){
//     console.log(k);
//     k++;
// }


// let k=1;
// while(k<4){
//     k++;
//     console.log(k);
    
// }

// let sum =0;
// for(let i=1;i<=3;i++){
// sum=sum+i;
// }
// console.log(sum);


// let y = null;
// console.log(typeof null);


// console.log(x);

// var x = 10;


// let str2= " this is a playwright class"

// for(let char of str2){
//     if (char =='a'|| char=='e'||char=='i'||char=='o'||char=='u'){
//         console.log(char);
//     }
// }


// console.log("finding vowel count and consonant count")
// let str3 = "Rama";
// let VowelCount=0;
// let Consonants=0;

// for(let char of str3){
//      if (char =='a'|| char=='e'||char=='i'||char=='o'||char=='u'){
//         VowelCount++;
// }else{
//      Consonants++;
// }
// }

// console.log("vowelcount = "+ VowelCount);
// console.log("consonantcount = "+ Consonants);




let student={
    name: "ram",
    age:25,
    course:"automation"
}
let propertycount=0;
for(let propertyname in student){
    propertycount++;
    console.log(propertyname +"="+ student[propertyname]);

}
console.log(propertycount)