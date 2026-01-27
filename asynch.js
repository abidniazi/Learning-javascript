// let mypromice = new Promise(function(res,rej){
// let sucess=false;
// if(sucess){
//     res("resolved invoked")
// }
// else{
//     rej("rejected invoked ")
// }
// });

// mypromice
//      .then((res)=>console.log(res))
//      .catch((rej)=>console.log(rej))

// console.log("before")

// async function validate(){
//     setTimeout(()=> console.log("wait 2 sec"),2000)
//      let sucess = true ;
//     if(sucess){
//         console.log("sucess")
//     }else{
//         console.log("not true")
//     }

// }
// validate()
// console.log("after")


// function orderfood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let foodrady = true;
//             if (foodrady) {
//                 resolve("food is ready");
//             } else {
//                 reject("food is not ready ");
//             }
//         }, 2000);
//     });
// }
// orderfood()
//          .then(res=>console.log(res))
//          .catch(err=>console.log(err));

// chaining in promices 

// function login(){
// return Promise.resolve("login suceesful")
// }


// function getProfile(){
// return Promise.resolve("get profile suceesful")
    
// }

// function getOrder(){
// return Promise.resolve("get profile suceesful")
    
// }

// login()
//     .then(res=>{
//         console.log(res);
//         return getProfile();
//     }).then(res=>{
//          console.log(res);
//         return getOrder();
//     })
//     .then(res=> console.log(res))
//     .catch(err=>console.log(err))



//real world promices


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=> res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// async function getuser(){
//    let res= await fetch("https://jsonplaceholder.typicode.com/users")
//    let data=await res.json()
//    console.log(data)
// }
// getuser()

