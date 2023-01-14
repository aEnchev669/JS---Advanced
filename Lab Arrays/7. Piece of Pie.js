function pie(arr,word1, word2){
   let index1 = arr.indexOf(word1);
   let index2 = arr.indexOf(word2);

   let output = [];

   for (let i = index1; i <= index2; i++) {
   
    output.push(arr[i]);
   }
   return output;
}

pie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie');