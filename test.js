//Question2
let a = 10;
let b = 20;
if (a<b){
    let b=100;
    z=b/a;
    console.log(z)
}
console.log(b)

//Question3
const city = ["Ahmedabad", "Bangalore", "Chennai"];
city.pop(0);
city.push("Lucknow");
console.log(city);

//Question4-soln
let sum = (a,b)=>{
    return(a+b);
}
console.log(sum(5,10));

//Question5-soln
let arr = [1,2,3,4,5,6,7,8,9];
let evenarr = [];
let oddarr = [];
for (let num of arr){
    if (num%2==0){
        evenarr.push(num);
    }
    else{
        oddarr.push(num);
    }
}
console.log(evenarr);
console.log(oddarr);
let evenmax = Math.max(...evenarr);
console.log(evenmax);

//Question6
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');
sets.add('c');
sets.add('a');
sets.add('c');
console.log(sets.size);

document.querySelector(‘hi’).contentName = “Hello World”