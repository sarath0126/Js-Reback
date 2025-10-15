// rest 
// Used to collect multiple values into a single array or object


const [first ,second , third, ...rest] = [10,20,30,40,50,60];

 
console.log(first); //10
console.log(second); //20
console.log(third); // 30

console.log(rest); //[40,50,60]



function giveNames(...names){
    console.log(names)
}


giveNames("Sarath" , "Meghana" , "Sudha")