function sameNumber(number)
{
   const word = number.toString();
   const array = new Array(word.length);
   let sum = 0;
   for (let i = 0; i < word.length; i++) 
   {
   array[i] = word[i];
   sum += Number(word[i]);
   }

   for (let i = 1; i <= array.length; i++) 
   {
    if(array[i] !== array[i - 1])
    {
        console.log(false);
        console.log(sum);
        return;
    }
   }
   console.log(true);
   console.log(sum);
}

sameNumber(22223);