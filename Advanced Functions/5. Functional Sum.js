function add(number) {

    const newFunc = function (after) {
        number += after;

        return newFunc;
    };

    newFunc.toString = function (){
        return number;
    }

    return newFunc;
}

console.log(add(1).toString())
add(1)(6)(-3)