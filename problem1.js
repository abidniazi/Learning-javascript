// function cheek(num){
//     num%2===0 ? console.log("even"):console.log("odd")
// }

// cheek(1)




// 1 2 3 4 5  = 15 
//total:0 1 3 6 10 
//i:    0 1 2 3 4 5
// function sumton(num){
//     var total=0;
//     for(let i=0;i<=num;i++){
// total += i;
//     }
//     console.log(total)
// }

// sumton(10)





//Reverse a string 

// function reversting(str){
// let rev=" ";
//   for(let i= str.length-1;i>=0;i--){
//     rev+=str[i];
//   }
// return rev;
// }


// var string ="hello";

// console.log(reversting(string))




// maximum in array

// function findmax(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if (arr[i] > max){

        
//         max=arr[i]
//     }
//     }
//     return max;
// }
// let arr=[2,22,5,7,8,9,55,33];

// console.log(findmax(arr))


//for of 
// let arr=[2,22,5,7,8,9,55,33];

// for(let val of arr){
//     console.log(val)
// }

// let students = ["Ali", "Ahmed", "Sara"];

// for(let val of students){
//     console.log(`welcome to office ${val}`)
// }


// for in 

// let user = {
//   name: "Abid",
//   age: 22,
//   role: "Developer"
// };

// for (let key in user){
//     console.log(key,user[key])
// }


// let marks = { math: 85, cs: 92, eng: 78 };

// for(let mark in marks){
//     console.log(`total marks : ${marks[mark]}`)
// }

// let students = ["Ali", "Ahmed", "Sara"];

// students.forEach((val,index,array)=> console.log(val,index,array) )



// let cart = [100, 200, 300];
// let total=0;

// cart.forEach(val=> total+=val);
// console.log(total)
// console.log(typeof(total))



// let array=[2,4,5,6,7,8];
// let newArr=array.map(arr=>arr*2)

// console.log(newArr)



// let array=[2,4,5,6,7,8];

// let evenaray=array.filter(n=> n%2==0);

// console.log(evenaray)

// let students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 85 },
//   { name: "Ahmed", marks: 60 }
// ];

// let names=students.filter(n=>n.name.includes("A") )
// console.log(names)


// let array=[2,4,2,2,5];

// let sum=array.reduce((acc,curr)=> acc+curr,0)
// console.log(sum)

// let cart = [
//   { item: "Book", price: 500 },
//   { item: "Pen", price: 100 },
//   { item: "Bag", price: 1500 }
// ];

// let total=cart.reduce((total,p)=> total+p.price,0)
// console.log(total)


// let students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 90 },
//   { name: "Ahmed", marks: 75 }
// ];

// let topper = students.filter(n=>n.marks>70).map(n=>n.name)
// console.log(topper)



// let cart = [
//   { item: "Laptop", price: 100 },
//   { item: "Mouse", price: 200 },
//   { item: "Keyboard", price: 500 }
// ];

// let total= cart.reduce((sum,curr)=> sum+curr.price,0)
// console.log(total)



// Synchronous and Asynchrononus

// promice
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed");
//   } else {
//     reject("Task failed");
//   }
// });

// myPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


