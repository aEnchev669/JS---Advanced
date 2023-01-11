function solve(a,b,c){
    let result = c;
    if (a > c && a > b)
    {
        result = a;
    }
    else if(b > c && b > a)
    {
        result = b;
    }
    console.log(`The largest number is ${result}.`);
}

solve(5 , -3, 16);
solve(-3, -5, -22.5);

