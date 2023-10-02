// function

// console.log(greetings());

// function greetings(){
//     return "Hello";
// }

// const age = 17;

// const greetings = function(name){
//     const job = "teacher";
//     return name + age + job;
//     if (job == "teacher"){
//         const address = "manado";
//     }
// };
// console.log(greetings("hello"));
//console.log(address);

// immediately invoked function expression / anonymous function

// const output = (function (){
//     //console.log("hello");
//     return "hello";
// })();

// console.log(output);

// callback function // fungsi yang dikirim sebagai parameter pada fungsi lain

function logGreetings(greetings){
    console.log(greetings);
}

function createGreetings(name, callback){
    const greetings = "hello " + name;
    callback(greetings);
}
//createGreetings("test", logGreetings);

createGreetings("test", function(greetings){
    console.log(greetings);
});







