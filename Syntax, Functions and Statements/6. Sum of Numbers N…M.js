function sum(n1, m1)
{

    let n = Number(n1);
    let m = Number(m1);
    let result = 0;
    for (let i = n; i <= m; i++) 
    {
        result += i;
    }
    console.log(result);
}

sum('1', '5');
sum('-8', '20');