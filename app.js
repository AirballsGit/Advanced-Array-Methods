
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
