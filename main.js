#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];



let numbers = process.argv
.slice(3, process.argv.length);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].indexOf("@") != -1) {
        let nums = [];
        let num = numbers[i].split("@")[0];
        let iter = numbers[i].split("@")[1];
    
        if(iter <= 0 || num == "" || iter == ""){ 
            console.log("Invalid repeat!");
            process.exit(1);
        }
    
        for (let i = 0; i < parseInt(iter); i++) {
            nums = nums.concat(num) 
        };
        numbers = numbers.slice(0, i)
        .concat(nums)
        .concat(numbers.slice(i+1));
    }
}
numbers = numbers.map((n) => parseFloat(n));


if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}



let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "min":
        result = lib.min(numbers);
        break;
    case "med":
        result = lib.med(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
console.log(result)