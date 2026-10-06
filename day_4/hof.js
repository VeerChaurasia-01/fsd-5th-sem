let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.map((data)=>console.log(data));
const multipleoffive = arr.map((data)=>data*5);
console.log(multipleoffive);

const divisibleoffive = arr.filter((data)=> data%5 ===0);
console.log(divisibleoffive);

const firstDivisibleoffive = arr.find((data)=> data%5===0);
console.log(firstDivisibleoffive);

const sumofArr = arr.reduce((data,acc)=> acc+=data,0);
console.log(sumofArr);