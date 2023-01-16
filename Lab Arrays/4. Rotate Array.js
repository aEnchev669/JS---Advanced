function rotate(arr, times) {
    for (let i = 0; i < times; i++) {
        arr.splice(0, 0, arr.pop());
    }
    console.log(arr.join(' '));
}

rotate();