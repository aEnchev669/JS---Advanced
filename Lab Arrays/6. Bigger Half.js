function biggerHalf(array)
{
  array.sort((a,b) => a - b);

  array.splice(0,array.length / 2);
  
  return(array);
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])

