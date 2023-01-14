function oddPositions(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 1) {
            results.unshift(arr[i] * 2);
        }
    }

    return (results);
}

oddPositions([10, 15, 20, 25]);