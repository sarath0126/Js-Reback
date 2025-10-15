const arr = [1,2,3,4]
const arr2 = [5,6,7,8]

const mixedArr  = [...arr , ...arr2];

console.log(mixedArr);




const heros = ["hero1" , "hero2", "hero3"];

const duplicateHeros  = [...heros]


console.log(heros)
console.log(duplicateHeros);


const user = {
    name : "meghana",
    "age" : 25
}

const address = {
    city : "Nellore",
    state : "AP"
}


const mixedObj = {...user , ...address}

console.log(mixedObj)

console.log(mixedObj.name);
console.log(mixedObj.state);

