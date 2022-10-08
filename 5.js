// Create a function that takes any number of inputs and returns the multiplication of them.

function add(...args) {
    return args.reduce((acc, cur) => {
        return acc * cur;
    })
}


console.log(add(3, 4, 8));
console.log(add(3, 4, 4, 9));
console.log(add(3, 4, 8, 10, 20));