function lastNum (n, k)
{
    let sum = 0;
    let array = [1];
    let times = 0;
    for (let i = 1; i < n; i++)
    {
        for (let s = i - 1 ; s >= 0; s--)
        {
            if(times == k)
            {
                break;
            }
            sum += array[s];
            times++;
        }
       times = 0;
        array.push(sum);
        sum = 0;
    }

    return (array);
}

lastNum();