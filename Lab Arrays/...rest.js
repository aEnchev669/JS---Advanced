const myArr = [20, 30, 40 ,2 , 3, 4, 5];

const [a, b, ...rest] = myArr;
const [...rest2] = myArr;

console.log(a, b, rest);
console.log(rest2);