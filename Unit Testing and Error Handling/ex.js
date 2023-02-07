const arr = ['AS', '10D', 'KH', '2C'];
for (const token of arr) {
    
    let last = token[token.length- 1];
    let face = token.slice(0, -1);
    console.log(face);
    console.log(last);
}
