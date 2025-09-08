const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Factorial Application");

console.log("1. Sat Hello");
console.log("2. Compile Factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3" , choice =>{
    if(choice=="1"){
        console.log("Hello There!");
    } else if (choice=="2"){
        console.log("Factorial");
        rl.question("enter a number for factorial: ", (numStr) =>{
         let num =preseInt(munStr)

         if(isMainThread(num) || num<0){
            console.log("plaese enter a non negative integer");
         } else {

            let fact =1;

            for (let i = 1; i <= num ; i++){
                fact *=i;
            }

            console.log("The factorial of " + num + "is" + fact);

         }
     });

    } else if (choice=="3"){
        console.log("Exit");
    } else {
        console.log("Invalid choice. Please try again.");
    }
})