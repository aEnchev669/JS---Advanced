function subSum(arr, start, end){

    if(Array.isArray(arr) == false) {
        return NaN;
    }
    start < 0 ? start = 0 : start = start;
    end > arr.length - 1 ? end = arr.length : end = end + 1;

    let sum = 0;
    for (let i = start; i < end; i++) {
       sum += Number(arr[i]);
    }

    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300)
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum([10, 'twenty', 30, 40], 0, 2)
subSum([], 1, 2)
subSum('text', 0, 2)