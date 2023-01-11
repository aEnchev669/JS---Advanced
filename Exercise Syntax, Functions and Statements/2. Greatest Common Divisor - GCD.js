function greatestCommon(num1, num2)
{
    let result = 0;
  for (let i = num2; i > 0; i--) 
  {
    if (num1 % i == 0 && num2 % i == 0)
    {
      console.log(i);
      break;
    }
  }
}

greatestCommon(2154, 458);