function stars(num)
{
    if (num == 0)
    {
     num = 5;
    }
  let sb = '';
  for (let k = 1; k <= num; k++) 
  {
    sb += '* ';
  }
  for (let i = 1; i <= num; i++) 
  {  
   console.log(sb);    
  }
}

stars(1);
stars(2);
stars(5);
stars(7);