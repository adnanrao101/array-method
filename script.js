// let fruits = ["apple", "banana", "mango"];
// // document.write(fruits.length);  array.length

// // console.log(fruits.toString()); array.toString()

// console.log(fruits.at(0));  
// console.log(fruits.at(-1)); 

// // console.log(fruits.join(" | ")); array.join


// // let last = fruits.pop();
// // console.log(last);
// // console.log(fruits);  array.pop


// // fruits.push("grapes");
// // console.log(fruits); array.push


// // slice------------------


// // let sliced = fruits.slice(2);
// // console.log(sliced);




// 1. array.length

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// console.log(fruits.length); // 3


//  2. array.toString()

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// console.log(fruits.toString())


// 3. array.at(index)

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// console.log(fruits.at(0))
// console.log(fruits.at(-4))


// 4. array.join(separator)

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// console.log(fruits.join(" / "))


//  5. array.pop()

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// fruits.pop()
// console.log(fruits)


//  6. array.push(value)

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// fruits.push("kiwi")
// console.log(fruits)


// 7. array.shift()

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// fruits.shift()
// console.log(fruits)


// 8. array.unshift(value)

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// fruits.unshift("kiwi")
// console.log(fruits)


//  9. delete array[index]

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// delete fruits[2]
// console.log(fruits)


//  10. array.concat(array2)

// let fruits = ["apple", "banana", "mango", "grapes", "orange"];
// let veg = ["tomatoes", "onion", "potato"];
// let food = fruits.concat(veg);
// console.log(food);


// 11. array.copyWithin(target, start, end)


// let numbers = ["banana", "apple", "mango", "kiwi", "orange"];
// // let numbers = [1,2,3,4,5];
// numbers.copyWithin(2,3);
// console.log(numbers)


// 3. flat()

// let arr = [1, [2, [3]]];
// console.log(arr.flat(2));


// 4. slice()

let colors = ["red", "green", "blue"];
let sliced = colors.slice(0, 2);
console.log(sliced);