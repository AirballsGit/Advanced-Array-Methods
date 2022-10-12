
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
                            // BUT IF YOU run numbers in the console it will>>
                            // return [undefined, undefined, undefined]
});

//example 2:
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


// example 3: ***** quick way to turn nodelists into arrays to use array methods ****

const links = document.querySelectorAll('a'); // this will return a nodelist so you cant use all array methods
// we can turn the nodelist into an array using a helper method Array.from ****

const iter = Array.from(links); // *** using the Array.from Here and saving to varible

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

// function myMap(arr, callback){
//     const mappedArray = [];
//     for(let i = 0; i < arr.length; i ++){
//         mappedArray.push(callback(arr[i]))
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(toDos, function(todo){
//     return todo.priority;
// })

//example 2: using the index:

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i ++){
        const val = callback(arr[i],i,arr)
        mappedArray.push(val);
    }
    return mappedArray;
}

const repeatedStrings = myMap(['a','b','c','d','e'], function(str,idx){
    return str.repeat(idx);
})


//**********************/
// Section 3: // Filter: 
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
    'psychophysicotherapeutics',
    'squirrelled',
    'tsktsk',
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
// const bigWord = words.filter(function(word){
//     return word.length >= 20; 
// })

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

