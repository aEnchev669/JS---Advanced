function print(arr, n){
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if(i % n == 0){

            result.push(arr[i]);
        }
    }

    return(result);
}

print(['1', '2', '3', '4', '5'], 6);