function area(num){
let result;
    if(typeof(num) === 'number')
    {
      result = Math.pow(num, 2) * Math.PI;
      console.log(result.toFixed(2));
    }
    else
    {
     console.log(`We can not calculate the circle area, because we receive a ${typeof(num)}.`);
    }
}

area(5);
area('name');