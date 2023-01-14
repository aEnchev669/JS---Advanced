function diagonal(arr){
   let sum1 = 0;
   let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        
        sum1 += arr[i][i];
        sum2 += arr[arr.length - i - 1][i];
    }
    console.log(`${sum1} ${sum2}`)
}

diagonal([[20, 40],[10, 60]])