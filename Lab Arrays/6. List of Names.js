function list(arr){
    
    arr.sort((a,b) => a.localeCompare(b));
    for (let i = 1; i <= arr.length; i++) {
        
        console.log(`${i}.${arr[i - 1]}` )
    }
    
}

list(["John",

"Bob",

"Christina",

"Ema"]);