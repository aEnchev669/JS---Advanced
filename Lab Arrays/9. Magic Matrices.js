function magicMatrix(arr) {
    let sum = [0,0];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {
            if (row == 0) {
                sum[0] += arr[row][col];
            }
            else {
                sum[1] += arr[row][col];
            }
            

        }
        if (sum[0] != sum[1] && sum[1] != 0) {
            
            console.log(false);
            return;
        }
        sum[1] = 0;
    }
    console.log(true)
}

magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);