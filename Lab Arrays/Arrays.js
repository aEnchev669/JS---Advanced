let myArr = [10, 20, 30, 40, 50, 60];

console.log(myArr.length - 1);
console.log(myArr.length);

myArr[1.3] = 'Ivan';
myArr[1.4] = 'Gosho';
myArr['gosho'] = 'goga';

console.log(myArr[1.3]);
console.log(myArr[1.4]);

console.log(myArr[-2]);

console.log(myArr['Gooosho']);
