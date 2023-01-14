function numbers(arr) {
    let result = [];
    arr.forEach(element => {
        if (element < 0) {
            result.splice(0, 0, element);
        }
        else {
            result.push(element);
        }
    });

    console.log(result.join('\n'));
}

numbers([3, -2, 0, -1]);