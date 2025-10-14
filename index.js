// map , filter , reduce

// (map , filter , reduce) is used to modify arrays 


const arr = [1,2,3,4];

const doubled = arr.map((num)=>{
    return num * 2 ;
});

console.log(arr);

console.log(doubled)




const arr2 = ["mango" , "orange" , "apple"];

const  newArr2 = arr2.map((fruit)=>{
    return fruit + " fruit";
})

console.log(newArr2)



// Filter
// to filter in array 

const numbers = [1,20,87,52,2,4,89,54,17,11,14];

const greatestNumbers = numbers.filter((num)=>{
    return num > 20;
})

console.log(greatestNumbers);



const students = [
    {name : "meghana" , age : 24},
    {name : "sarath" , age : 21},
    {name : "hanvika" , age : 2},
    {name : "rakesh" , age : 28}
]


const adult = students.filter((student)=>{
    return student.age >=18;
})

const head = students.filter((student)=>{
    return student.name === "rakesh";
})

console.log(adult);
console.log(head);




const vegetables = ["apple" , "banana", "orange" , "kiwi"];

const bigVeg = vegetables.filter((veg)=>{
    return veg.length>10
});

console.log(bigVeg)




// reduce 

const count = [10,20,30,40]; //100

let cnt = 0;

for(let i=0; i<count.length ; ++i){
  cnt = cnt + count[i];
}

console.log("For loop count :" , cnt)


// now we count using reduce
const count2 = [10,20,30,40];
let countVal = count2.reduce((acc,curr)=>{
    return acc + curr;
},0)

console.log("Reduce count : ",countVal)

