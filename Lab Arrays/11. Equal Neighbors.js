function equalNeighbors(arr){

    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr[i].length; j++) {
       
        if(arr[i][j] == arr[i + 1][j])
        {
            sum ++;
        }
       }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
        
         if(arr[i][j] == arr[i][j - 1])
         {
             sum ++;
         }
        }
     }

    console.log(sum);
}

equalNeighbors([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]);