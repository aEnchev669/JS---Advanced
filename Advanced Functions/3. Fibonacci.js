function getFibonator(){
    let previous = 1;
    let num = 0;

    function fib (){
        let finBumber = previous + num; // 0 + 1,  1 + 0
        previous = num ;      //0 , 
        num = finBumber;   //1
        
        return finBumber;
    }
    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13