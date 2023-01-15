function extract(arr) {
    let result = [];
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            result.push(biggestNum)
        }
    }

    return(result);
}

extract();