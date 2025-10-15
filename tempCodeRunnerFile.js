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
