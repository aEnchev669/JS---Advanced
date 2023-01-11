function operation(num1, num2, arg ){

    let result;
    if (arg === '+')
    {
     result = num1 + num2;
    }
    else if (arg === '-')
    {
     result = num1 - num2;
    }
    else if (arg === '*')
    {
     result = num1 * num2;
    } 
    else if (arg === '/')
    {
     result = num1 / num2;
    }
    else if (arg === '%')
    {
     result = num1 % num2;
    }
    else if (arg === '**')
    {
     result = num1 ** num2;
    }

    console.log(result);
}

operation(5, 6, '+');
operation(3, 5.5, '*');