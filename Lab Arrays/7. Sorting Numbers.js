function sort(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    let num = arr.length / 2;
    for (let i = 0; i < num; i++) {

        result.push(arr.shift());
        result.push(arr.pop());
    }
    return(result);
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);