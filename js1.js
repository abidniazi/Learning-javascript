// var a;
// var backtis =`" www.google.com"abid".com"\n`
// var sum = 10 +10;


// var str1="string 1 "
// var str2="string 2 "
// console.log(str1.length)
// var con=str1.concat(str2);
// console.log(con);
// console.log(backtis);
// console.log(sum);


// var array =[["abid",1],10,["niazi",30]]
// array.push(["new",1])
// array.pop()
// array.shift()
// array.unshift(["new",1])


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element) 
// }




// function imlime (arr , num){

//     arr.push(num);
//     var item =arr.shift()
//     return item
// }

// var arr=[2,4,5,7,9];
// var result=imlime(arr,10);
// console.log(result)



// function show(num){
// switch (num) {
//     case 1:
//         console.log("1")
//         break;

//          case 2:
//         console.log("2")
//         break;

//          case 3:
//         console.log("3")
//         break;

//          case 4:
//         console.log("4")
//         break;
//.

//     default:
//         console.log("none")
//         break;
// }

// }


// show(7);

// const obj1={
//     name:"abid",
//     class:16,
//     greet:function (){
//         console.log(`  Hello brother ${this.name} `)
//     }
// };

// function cheek(cheekthis){

// if (obj1.hasOwnProperty(cheekthis)){ 
//     return obj1[cheekthis];}
// else{ 
//     return "Not found "}

// }

// console.log(cheek("greet"))
// delete obj1.class ;
// console.log(obj1);
// obj1.greet();
 






// var storage = {
//     "car":{
//         "inside":{
//             "model": "new",
//             "year":"2001"
//         },
//         "outside":{
//              "model": "old",
//             "year":"2002"
//         }
    
// }
// }

// console.log(storage.car.outside.model)





// var plants = [
// {
//     type:"flowers",
//     list:[
//         "rose",
//         "rose",
//         "rose"
//     ]},
//     {
//     type:"petals",
//     list:[
//         "rose",
//         "rose2",
//         "rose"
//     ],

// }
// ]


// console.log(plants[1].list[1])


// function inBetween(min,max){
//     var num = Math.floor(Math.random()*(max-min+1)+min);
//     console.log(num)
// }

// inBetween(5,15)



// function condertToInteger(str){
// return parseInt(str)
// }

// console.log(typeof(condertToInteger("12321")))

// function cheekEqual(a){
//     return a>0 ? "positive":"negative";
// }
// console.log(cheekEqual(-5));



// VAR(can declare twice , duplication occour, can be used outside of the block , ) AND LET (cant allow declare twice, duplication dont occur,only used in block in which its declared  )


// function changeConstant(){
// const constant={
//     PI:3.14
// };
// try {
//     constant.PI=99;
// }
// catch(ex){
//     console.log(ex)
// }
// return constant.PI;
// }
// console.log(changeConstant())


// Annonymouse function 

// var arrow = ()=>{
//     return new Date();
// }

// console.log(arrow())



// const Concatt = (num1,num2) => num1.concat(num2); 

// console.log(Concatt(["Ammar"] , ["Niazi"]))




// var i=0;
// while(i<5){
//     console.log(i);
//     i++
// }


// for(var j=0;j<5;j++){
//     console.log(j);
// }


// function multiplayArray(arr){
   
// var product=0;
//     for(var i=0;i<arr.length;i++){ 
//         for( var j=0 ;j<arr[i].length;j++){
            
//             product += arr[i][j];
//         }
//     }
//     return product
// }


// var product= multiplayArray([[1,2],[2,3],[2,3,5]])
// console.log(product);

// var i=0

// do{
//     console.log(i)
//     i++
// }while(i<0);


// let array = [ 1,2, 3];
// let result = array.map(function(values){
//     return values*2
// })
// console.log(result);
// console.log(typeof(array))


// returing object from map 



// let array = [ 1,2, 3];

// let obj={

// };
// obj=array.map((n)=>({
//     original:n,
//     double:n*2
// }))
// console.log(obj)



// let names= ["abid","abid","abid","abid"];
// let capital= names.map(n=>

//  n.toUpperCase())
// console.log(capital);



// let users =[ 
// {id:1,namee:"abid"},
// {id:2,namee:"abid2"}

// ];


// let ids=users.map(n=>n.id)
// console.log(ids);



// let matrix = [[1,2],[3,4]];

// let result = matrix.map(row=> row.map(num=> num*2));
// console.log(result)



// let arr= [2,3 ,4,5];

// let even= arr.filter(val=>val%2!=0)
// console.log(even)


// let arr= ["abid","abid","abid","khan","abid"];

// let even= arr.filter((val,i,ar)=>val.startsWith("ab"))
// console.log(even)




// let user =[ 
//     {name:"ali", role:"kmin"},
//     {name:"ali", role:"admin"},
//     {name:"sultan", role:"admin"},
//     {name:"ali", role:"nr"}
// ]
// var search="sultan";
// let admin = user.filter(id=>id.name==search);
// console.log(admin)


// let students = [
//   {name:"Ali", marks:45},
//   {name:"Abid", marks:80},
//   {name:"Ahmed", marks:60}
// ];

// let passed = students.filter(n=>n.marks>=50).map(s=>s.name)
// console.log(passed)

// let words = ["I","love","JS"];

// let sentence = words.reduce((acc, w) => acc + " " + w, "");

// console.log(sentence.trim());

let arr1= [1,2,3];
let  arr2;
arr2=arr1;
arr2[2]=5;

console.log(arr1)
console.log(arr2)
