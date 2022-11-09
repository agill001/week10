/* 
 for (let i =1; i < 11; i++){
     console.log(2**i);
 }


  
let i=1;
while(i<11){
    console.log(2**i);
    i++;
}
 */


// let input;
// let numberedInput;
// do {
//   input = prompt("what is your name?"); //always returns a string
//   numberedInput = Number(input);
// } while(!isNaN(numberedInput));

// // alert("hello " + input)
// alert(`Hello ${input} how are you?`)

// let fruits = ['Apples','Banana'];
// fruits.push("Orange");
// // fruits.pop();
// fruits.unshift("Mango");
// // fruits.shift();
// console.log(fruits)

// for (let i=0; i<fruits.length;i++)
// {
//     console.log(fruits[1]);
// }

// for (let item of fruits)
// {
//     console.log(item)
// }


// const person ={
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiiing'],
// };

// console.log(`My name is ${person.name[0]}  ${person.name[1]}. I am intersted in ${person.interests[1]}`)

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
    };

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
    };

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
    };

let students = [student1, student2, student3];
let counter = 0;
for (let item of students){
    if(item.program === "CIT" && item.GPA > 3){
   console.log(item);
   counter = counter +1;
    }
}
console.log(counter);