// let arr =[1,2,3,4,5]
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i])
// }

// let arr =[1,2,3,4,5]
// for (let num of arr){
//     console.log(num)
// }


// let arr =[1,2,3,4,5]
// for(let num of arr){
//     if(num%2==0){
//         console.log(num)
//     }
// }



// let num =21
// do{
//     console.log(num)
// }while (num<20)



    // let num =1
    // while(num<10){
    //     console.log(num)
    //   num++;
    // }



    // let arr =[1,2,3,4,5]
    // for(let a of arr){
    //     console.log(a)
    // }
    



    // let empname = 'ravi'
    // for(let char of empname){
    //     console.log(char)
    // }


    let countevenumbers = 0;
    let countoddnumbers=0;
    let arr1 =[1,2,3,4,5]
    for (let num of arr1 ){
        if(num%2==0){
    console.log(num + "is an even numbers")
     countevenumbers++;
    }else{
        console.log(num +"is an odd numbers")
        countoddnumbers++
    }

   
}
console.log(countevenumbers);
console.log(countoddnumbers);


let empname = 'ravi';
for(let char of empname){
    if(char =='a'|| char=='e'|| char=='i'|| char=='o'||char=='u'){
        console.log(char)
    }
}


let employeedetails={
    name:"Ravi",
    age:30,
    address:'bengaluru'
}

for(let key in employeedetails){
console.log(key + " value is "+ employeedetails[key])
}


for(let num=10;num>=1;num--){
    console.log(num)
}








let student={
    name:"Rama",
    age:25,
    course:"Automation"
}

let Propertiescount=0;
for(let propertyName in student){
    Propertiescount++;
    console.log(propertyName+" = "+student[propertyName])
}

console.log(Propertiescount);