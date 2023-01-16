function even(arr)
{
    let myString = '';
  for (let i = 0; i < arr.length; i++) 
  {
   if (i % 2 == 0)
   {
    myString += arr[i] + ' ';
   }
  }
  console.log(myString);
}

even();