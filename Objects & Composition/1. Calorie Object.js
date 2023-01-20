function calorie(arr){
   let result = {};

    for (let i = 0; i < arr.length; i+=2) {
        let nameOfFood = arr[i];
        let calories = Number(arr[i + 1]);
        
        result[nameOfFood] = calories;
    }
    console.log(result);
}

calorie(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);