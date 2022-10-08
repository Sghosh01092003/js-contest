// Create an array of cubes from an array of numbers using map function. And visualize like this
// Index 0 -> 1
// Index 1 -> 8
// Index 2 ->27 where the provided array is [1,2,3] 

let cubeArr = [1, 2, 3];

cubeArr.map((cube, index) => {
    console.log(`Index ${index} -> ${cube * cube * cube}`)
})