function sort(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    
for (let i = 0; i <= arr.length / 2 ; i++) {
  
    result.push(arr.shift());
    result.push(arr.pop());
}
    console.log(result);
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);