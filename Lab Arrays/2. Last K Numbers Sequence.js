function lastNum (n, k)
{
    let sum = 0;
    let array = [1 ,1, 2];
    let rounds = 0;
    for (let i = 3; i < n; i++)
    {
        for (let j = i- 1; j > rounds; j--) 
        {
           sum += array[j];
        }
        rounds+=1;
        array.push(sum);
        sum = 0;
    }

    console.log(array);
}

lastNum(6,3);