// let score=80;
// let result=score>=80 ? "pass" : "fail";
// console.log(result);

// let user={
//     profile: {
//         name:"Muhammad Hassan",
//         Age:17,
//         Address:{
//             City:"Karachi",
//             Uban:"Korangi no 4 ",
//             Course:{
//                 name:"web 3",
//             }
//         }
//     }
// }
// let identity=user?.profile?.Address?.Course;
// console.log(identity);

// const obj={
//     a:1,
//     b:2,
//     c:3,

// }
// for (const key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// function calculateAverage(num){
// if(num.length===0){
//     return 0;
// }
// const sum=num.reduce((acc,currentValue)=>acc +  currentValue,0);
//    const average=sum/num.length;
//    return average;
// }
// let average=calculateAverage([14,30,40,50,60,10]);
// console.log(`the Average is : ${average}`);

// function outerFunction(x) {
//   function innerFunction(y) {
//       return x + y; 
//     }
//   return innerFunction; 
//   }
//   var closureInstance = outerFunction(10);
//   var result = closureInstance(5);
//   console.log(result); 

// const student={
//     name:"Muhammad Hassan",
//     age:17,
//     grades:[90,85,80,92,72,86],
//     calculateAverage:function(){
//         let sum=this.grades.reduce((acc, grade)=>acc + grade,0);
//         let  average= sum / this.grades.length;
//         return average.toFixed(2);
//     }
// };
// let averageGrade= student.calculateAverage();
// console.log(`the average grade of ${student.name} is: ${averageGrade}`);
  
// let originalObject={
//     name:'Hassan',
//     age:17,
//     details: {
//         city:'karachi',
//         country:'Pakistan'
//     }
// };
// let shallowCopy=Object.assign({},originalObject)
// shallowCopy.name='Akram';
// shallowCopy.details.city='korangi 4';
// console.log('Original Object:',originalObject);
// console.log('Shallow Copy:',shallowCopy);

// let originalObject={
//     name:'Hassan',
//     age:17,
//     details: {
//         city:'karachi',
//         country:'Pakistan'
//     }
// };
// let deepCopy=JSON.parse(JSON.stringify(originalObject));
// deepCopy.name='Akram';
// deepCopy.details.city='korangi 4';
// console.log('Original Object:',originalObject);
// console.log('Deep Copy:',deepCopy);

// let originalObject={
//     name:'Hassan',
//     age:17,
    
// };
// let referenceCopy=originalObject;
// referenceCopy.name='Akram';
// console.log('Original Object:',originalObject);
// console.log('Reference Copy:',referenceCopy);

// 8. Write a loop that iterates over an array of numbers and logs whether each number is
// even or odd, using a ternary operator.

// const arr=[1,3,2,5,4,6,8];
// arr.forEach(element => {
//   let msg=element % 2 ===0 ? "Even" :"Odd";
//   console.log(`${element} is ${msg}`); 
// });

//by for loop

// for (let i = 0; i < 10; i++) {
//    do some work
    
// }

//by while loop
// let i=0
// while (i < 10) {
//   do some work
//   i++;  
// }

//by do while loop
// let j=0;
// do {
//     do some work
//     j++;
// } while (j< 10);

// let users=[
//     {name:'hassan',details: {age: 25}},
//      {name:'akram',details:{ /*age property is missing*/ }},
//      {name:'pervez',details:{ /*details property is missing*/ }}
// ];
// for(let user of users){
//     let age=user?.details?.age;
//     if(age!== undefined){
//         console.log(`${user.name} age is ${age}`);
// }
// else{
//     console.log(`${user.name} does not age have an specified`);
// }
// }

/*11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.*/

// let obj={
//        name:'hassan',
//        age:17,
//        city:'karachi',
//        area:'korangi 4'
// }
// for (let key in obj){
//     console.log(`property : ${key} ,value ${obj[key]}`);
// }

// 12. Explain the use of the break and continue statements within loops. Provide
// scenarios where each might be used.

// console.log("~~Break ~~")
// for (let i = 0;i < 10; i++){
//     console.log(i);
//     if(i === 5){
//         break; //terminal the loop when i is equals to 5
//     }
// }
// console.log("~~Continue ~~")
// for (let i = 0;i < 5; i++){
//     console.log(i);
//     if(i === 2 || i === 3){
//         continue; //skip iteration when i = 2 or 3
//     }
//     console.log(i);
// }

// 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

// let calculateTax=(income) =>{
//     const taxRate=income > 10000 ?0.2 : income > 5000 ? 0.1 :0.05;
//     const taxAmount=income*taxRate;
//     return taxAmount; 

// }
// let income=15000;
// let tax= calculateTax(income);
// console.log(`for an Income ${income} ,the tax amount is ${tax}`);

// 14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

let car={
    make:'Honda',
    model:'Civic',
    startEngine:() => {
        console.log(`Starting the engine of ${car.make} ${car.model}`);

    }
}
car.startEngine()