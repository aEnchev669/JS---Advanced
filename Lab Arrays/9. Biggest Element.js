function biggestEl(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {

            if (arr[i][k] > biggestNum) {
                biggestNum = arr[i][k];
            }
        }

    }
return(biggestNum);

}

biggestEl();