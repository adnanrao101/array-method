let fruits = ["apple", "banana", "mango"];
// document.write(fruits.length);  array.length

// console.log(fruits.toString()); array.toString()

// console.log(fruits.at(0));  
// console.log(fruits.at(-1)); array.at(index)

// console.log(fruits.join(" | ")); array.join


let last = fruits.pop();
console.log(last);
console.log(fruits);  array.pop


fruits.push("grapes");
console.log(fruits); array.push


// slice------------------


let sliced = fruits.slice(0,2)
console.log(sliced)