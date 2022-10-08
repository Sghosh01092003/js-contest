// Access all the values of an object and store it in a array.
// Example : let object = {name:”ANI”,email:”subhradeeppal@outlook.com”}
// Output : [“ANI”,” subhradeeppal@outlook.com ”]
let myObject = {
    name: "ANI",
    email: "subhradeeppal@outlook.com"
}

 let keysArr = Object.keys(myObject)


let valuesArr = []

keysArr.forEach(key => {
    valuesArr.push(myObject[key])
});

console.log(valuesArr)