


// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },3000);
// }
// getData();

//await


//fetch API
 async function getData(){
   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await  response.json();
   console.log(data)
}
getData();