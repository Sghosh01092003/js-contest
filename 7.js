// Sort the array of objects 
// [{name:”Srijan”,roll:34},{name:”Sagnik”, roll:33},{name”Subhradeep”,roll:35}]
// The final array will look like this 
// [{name”Subhradeep”,roll:35},{name:”Srijan”,roll:34},{name:”Sagnik”, roll:33}]

let studentsArr = [
    { name: "Srijan", roll: 34 },
    { name: "Sagnik", roll: 33 },
    { name: "Subhradeep", roll: 35 }
]

studentsArr.sort((stu1, stu2) => {
    return stu2.roll - stu1.roll;
})

console.log(studentsArr)