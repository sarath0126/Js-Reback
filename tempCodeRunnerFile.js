
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
