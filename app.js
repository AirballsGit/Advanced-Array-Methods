
//**********************/
// Section 1: // intro to callbacks: 
//**********************/

function add (x,y){
    return x + y;   
}

function subtract (x,y){
    return x - y;   
}

function multiply (x,y){
    return x * y;   
}

function divide (x,y){
    return x / y;   
}

function power (x,y){
    return x ** y; 
}

const mathFuncs = [add,subtract,multiply,divide, power]; 
//need to call as mathFunc[0](5,4) >>> calls add with (5,4);

function doMath(a,b, mathFunc){
    return mathFunc(a,b);
}
// accepts 2 parameters a & b and you pass in one of the declared math functions as mathFunc

doMath(3,4, function(a,b){
console.log(a ** b);
})

function doAllMath(a,b, mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b))
    }
}

//**********************/
// Section 2: // For Each: 
//**********************/


// const colors = ['teal', 'cyan', 'peach', 'purple'];

// example 1:

//inline annoyomous function:

// colors.forEach(function(val){   
// console.log(val.toUpperCase());
// });

//example 2: create a function and pass it into foreach 

// function yell(val){
//     console.log(val.toUpperCase())
// }

// colors.forEach(yell);

// example 3: 

// function yell(val, i){
//     const caps = val.toUpperCase();
//     console.log(`At Index ${i} is ${caps}`);
// }

// colors.forEach(yell);

// example 4: 

// const prices = [30.99,19.99,2.5,99.0];

// let total = 0; 

// prices.forEach(function(price){
//     total += price; 
// }); 
// console.log(total);

// above can also be written with for of loop: 

const prices = [30.99,19.99,2.5,99.0];

let total = 0; 
for(let price of prices){
    total += price;
}
console.log(total);


// writing your own forEach:

const colors = ['teal', 'cyan', 'peach', 'purple'];

// function forEach(arr,callback){
//     for(let i = 0; i < arr.length; i ++){
//         callback(arr[i]);
//     }
// }

// forEach(colors,function(color){
//     console.log(color.toUpperCase());
// })


// same example as above but using the index 

//writing for each below but using the index: 
function forEach(arr,callback){
    for(let i = 0; i < arr.length; i ++){
        callback(arr[i], i);
    }
}

forEach(colors,function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})

// using the regular forEach  below outputs same result as above writing our own
colors.forEach(function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})