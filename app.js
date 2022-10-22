function holler(){ // function declaration 
    console.log('HEY YOU!');
}  // in console holler() >> HEY YOU!

const whisper = function(){ // annoyomous function expression 
    console.log('Psst I have a secret');
}// in console whisper() >> Psst I have a secret 


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
const mathThings = [power,add];
//need to call as mathFunc[0](5,4) >>> calls add with (5,4);

// -------------------------------------------//

function doMath(a,b, mathFunc){ // pass in a single function defined above into what 'mathFunc' is 
    return mathFunc(a,b);
}
// accepts 2 parameters a & b and you pass in one of the declared math functions as mathFunc

doMath(3,4, function(a,b){ //inline annoyomous function 
console.log(a ** b);
})

function doAllMath(a,b, mathFuncs){  //mathFuncs can be named anything (its not calling the varible mathFuncs here)
    for(let func of mathFuncs){
        console.log(func(a,b)) // in console we do doAllMath(2,7,mathFuncs) >> 128, 9 (we pass in mathFuncs into the function)
    }
}

function doAllMath2(a,b, maths){  //mathFuncs can be named anything (its not calling the varible mathFuncs here)
    for(let math of maths){
        console.log(math(a,b)) // in concole we do doAllMath2(2,7,mathThings) >> 128, 9 (we pass in mathFuncs into the function)
    }
}

// **UNDERSTAND THAT THE VARIBLE NAME DOESNT MATTER, YOU HAVE TO PASS IT IN YOURSELF)
// mathFuncs or mathThings gets passed inside of doAllMath & doAllMath2 (2 examples above), the varibles in the function dont matter)

//**********************/
// Section 2: // For Each: 
//**********************/


// For Each you can pass in 3 arguments (val, index, array) ** will hardly ever need to use array as it will return the entire array**

const colors = ['teal', 'cyan', 'peach', 'purple'];

//show everything forEach does 2 examples (first one just passing in console.log, second showing the args in text editor): 

//ex1
colors.forEach(console.log);

//ex2 
colors.forEach(function(val, index, arr){
    console.log(val,index,arr);
});

// example 1:

//inline annoyomous function:

colors.forEach(function(val){   
console.log(val.toUpperCase());
});

//example 2: create a function and pass it into foreach 

function yell(val){
    console.log(val.toUpperCase())
}

colors.forEach(yell);

// example 3: 

function yell2(val, i){
    const caps = val.toUpperCase();
    console.log(`At Index ${i} is ${caps}`);
}

colors.forEach(yell2);

// example 4: 

const prices = [30.99,19.99,2.5,99.0];

let total = 0; 

prices.forEach(function(price){
    total += price; 
}); 
console.log(total);

// above can also be written with for of loop: 

const prices2 = [30.99,19.99,2.5,99.0];

let total2 = 0; 
for(let price of prices){
    total2 += price;
}
console.log(total2);


// writing your own forEach:

const colors2 = ['teal', 'cyan', 'peach', 'purple', 'black'];

function myForEach(arr,callback){
    for(let i = 0; i < arr.length; i ++){
        callback(arr[i]);
    }
}

myForEach(colors2,function(color){
    console.log(color.toUpperCase());
})


// same example as above but using the index 

//writing for each below but using the index: 
function myForEach2(arr,callback){
    for(let i = 0; i < arr.length; i ++){
        callback(arr[i], i);
    }
}

myForEach2(colors2,function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})

// using the regular forEach  below outputs same result as above writing our own
colors2.forEach(function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})


//**********************/
// Section 3: // Map: 
//**********************/

// creates a new array >> 
//iterates through an array >> 
// runs a callback function for each value in the array>>
// adds the result of that callback function to the new array>>
//Returns the new array>>
//Map always returns a new arrau of the same length 
//doesnt mutate original array
//have to save map into a varible (i.e doubles to return that new 'mapped' array)

// easy example 1: 

const numbers = [1,2,3];
const timesTen = numbers.map(function(value){
    return value * 10;
});  // numbers = [1,2,3] numbers doesnt change
    // timesTen = [10,20,30] timesTen RETURNS this after the map is ran 

const doubles = numbers.map(function(num){
    console.log(num * 2); // this will print 2,4, 6 to the console
    return(num * 2);         // this will return an array [2,4,6] // BUT IF YOU run just numbers in the console it will>>
                            // return [undefined, undefined, undefined]
});


// example 2:

const numbers2 = [21,37,64,99,142];

const negatives = numbers2.map(function(num){
    return num * -1;
});


//example 3:
const toDos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'

    },
    {
        id: 2,
        text: 'walk the chickens',
        priority: 'medium'

    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'

    },
    {
        id: 4,
        text: 'put out the fire in my garage',
        priority: 'very high'

    },
];


const toDoText = toDos.map(function(todo){
    return todo.text; // ['walk the dog', 'walk the chickens', 'feed the cats', 'put out the fire in my garage']
});


// example 4: ***** quick way to turn nodelists into arrays to use array methods ****

const links = document.querySelectorAll('a'); // this will return a nodelist so you cant use all array methods
// we can turn the nodelist into an array using a helper method Array.from ****

const iter = Array.from(links); // *** using the Array.from Here and saving to varible turns this into an actual array we can use array methods on

const ls = iter.map(function(e){  // ** mapping over that iter array to get links
    return e.href; // ['http://www.google.com/', 'http://www.reddit.com/', 'http://www.yahoo.com/', 'http://www.instagram.com/']
})

// ABOVE example can be written as: 

const links2 = Array.from(document.querySelectorAll('a'));

const urls = links2.map(function(link){
    return link.href; // use the attribute array method to return what youre looking for
                        // >> ['http://www.google.com/', 'http://www.reddit.com/', 'http://www.yahoo.com/', 'http://www.instagram.com/']
}); 


// writing our own Map: 

//example 1:

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i ++){
        mappedArray.push(callback(arr[i]))
    }
    return mappedArray;
}

const priorityMap = myMap(toDos, function(todo){
    return todo.priority;
})

//example 2: using the index:

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i ++){
        const val = callback(arr[i],i,arr)
        mappedArray.push(val);
    }
    return mappedArray;
}

// in console "lol".repeat(4) === "lollollollol" ** easy example of what repeat does 

const repeatedStrings = myMap(['a','b','c','d','e'], function(str,idx){
    return str.repeat(idx);
})


//**********************/
// Section 4: // Filter: 
//**********************/

// easy example 1:

let letters = ['a','b','c','b','c'];

const includesB = letters.filter(function(value,index,array){
    return value === 'b';
}) // ['b','b']

//example 2:

const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively'
];

//written with true or false 

const bigWord = words.filter(function(word){
    if(word.length >= 20){
        return true;
    } else {
        return false;
    }
})

//above re-rewritten below:
const bigWord2 = words.filter(function(word){
    return word.length >= 20; 
})

// example 3: 

const startsWith = words.filter(function(word){
    return word[0] === 'u' || word[0] === 'c';
})

//example 4: EXCERCISE
// filter out the words that dont contain vowels: excercise [a,e,i,o,u]
// he notes the easiest way to accomplish this is by using a 'regular expression'


const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true; 
    }
    return false;
} 

const isVowel = function(char){    // if in console you do 'aeiou'.indexOf('c') >> -1 *character not found*
    return 'aeiou'.indexOf(char) !== -1; // if in console you do 'aeiou'indexOf('e') >> 1 *character is found*
} 


const containsVowels = words.filter(containsVowel); 
const noVowels = words.filter(function(word){
    return !containsVowel(word);
})


//**********************/
// Section 5: // Map & Filter: Combining Map & Filter:
//**********************/

//example 1:
const allCheckboxes = document.querySelectorAll('input[name="checkbox0"]');
// in console if you do Array.from(allCheckboxes)[0].checked >> this return true. 

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});


//example 2: putting them all together as if to send out email of complted todos:
function extractCompletedTodos(){
    const allCheckboxes = document.querySelectorAll('input[name="checkbox0"]');
    return Array.from(allCheckboxes).filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}

//**********************/
// Section 6: // Writing Filter:
//**********************/

function myFilter(arr,callback){
    const filteredArray = [];
    for(let i = 0; i <arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

const shorties = myFilter(words, function(word){ //using previous 'words' array from above
    return word.length <= 10;
})

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0;
})


//**********************/
// Section 7: // Some & Every: 
//**********************/

// we dont get an array back we get true or false * 

// Some:
// iterates through array > runs callback on each value in array > if callback returns true for atleast one single value, it returns true;
// EVERY: 
// iterates thru array > runs callback on each value in array>if callback returns false for any single value, it returns false

// easy example 1: SOME
let numbersSome = [8,9,14];

const someOne = numbersSome.some(function(value, index, array){
    return value <= 8;
}) // true 

const someTwo = numbersSome.some(function(value, index, array){
    return value === 15;
}) // false 


//example 2: SOME.. are SOME of the words in the words array > 25 characters:
const longWords = words.some(function(word){  // using 'words' array from earlier 
    return word.length > 25; 
}) // true

//example 3: SOME .. check if any of the words in the words array contains the word "thyroid". you could use the includes or indexOf (includes not supported by ie)
const containsThyroid = words.some(function(word){
    return word.indexOf('thyroid') !== -1;
}) //true

//every examples:
// EVERY: 
// iterates thru array > runs callback on each value in array>if callback returns false for any single value, it returns false

//example 1: EVERY.. check if every words in array is equal to or greater than 5 characters long
const atleastFiveChars = words.every(function(w){
    return w.length >= 5; 
}) //true

//example 2: write a function call to check if every element in arry is a string
function allStrings(arr){ // using the words array from earlier 
    return arr.every(function(el){
        return typeof el === 'string'
    })
} // allstrings(words) >>>> // true   *** allStrings(['a','b','c',5]) >>> // false 

//example 3: Some/EVERY with the dom:**
// using every in this example on const 'allChecked'
const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    const checks = document.querySelectorAll('input[name="checkbox1"]');
    const allChecked = Array.from(checks).every(function(checkbox){
        return checkbox.checked;
    })
    if(!allChecked){
    alert('PLEASE AGREE TO ALL THE TERMS OF SERVICE')
    } else {
        alert ('THANK YOU FOR AGREEING TO THE TERMS OF SERVICE');
    }
    
})


//**********************/
// Section 8: // WRITING Some / Every:
//**********************/

// Writing 'SOME' examples:

function mySome(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false; 
}

mySome([4,5,6,7], function (n){
    return n > 7;
}) // false (would be true if return n >= 7)

mySome([4,5,6,7], function(n){
    return n >= 7;
}) // true 

mySome([4,5,6,7], function (n){
    return n === 7;
}) // true 

//----------------//
// Writing 'Every' Examaples:

function myEvery(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true; 
}

const greaterThanFive = myEvery([4,5,6,7], function (n){
    return n > 5;
}) // false

const greaterThanThree = myEvery([4,5,6,7], function(n){
    return n > 3;
}) // true

const isInteger = myEvery([4,5,6,7], function (n){
    return Number.isInteger(n);
}) // true 

const isInteger1 = myEvery([4,5,6,7,4.5], function (n){ // 4.5 is not an integer
    return Number.isInteger(n);
}) // false



//**********************/
// Section 7: // Find & Find Index: 
//**********************/

// find = returns the first matching element 

const scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    55,
    59,
    69,
    73,
    73,
    75,
    79,
    83,
    88,
    91,
    93
];

const greaterThan75 = scores.find(function(score){
    return score > 75; 
}) // 79 ** gives the first match it finds after the function parameters are met... would return 75 if return >= 75; 

const firstEvenScore = scores.find(function(score){
    return score % 2 === 0; 
}) // 0 

const firstEvenScoreNotZero = scores.find(function(score){
    return score !== 0 && score % 2 === 0; 
}) // 88 


// find index: 

const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0; 
}) // 16 ... from the above example 88 is the first matching element thats even and not 0 and its at index 16 
//    if you run scores[16] in console it returns 88 


function partition(arr,pivot){  //run partition(scores,0) ....or whatever you want to filter out in place of the 0 
    const pivotIdx = arr.findIndex(function(el){
        return el > pivot;
    });
    // console.log(pivotIdx);   // if you run in the console partition(scores,0) this will give you 8 ( first el after the 0's end)
    const left = arr.slice(0,pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left, right];
}


//**********************/
// Section 6: // Writing Find & FindIndx:
//***********************

