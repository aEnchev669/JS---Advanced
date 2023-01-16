function biggerHalf(array)
{
  array.sort((a,b) => a - b);

  array.splice(0,array.length / 2);
  
  return(array);
}

biggerHalf()

