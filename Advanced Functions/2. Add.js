function Add(number) {

    const currentNumber = number;
    function sum(givenNumber) {
        return currentNumber + givenNumber;
    }

    return sum;
}

const add5 = Add(5);

console.log(add5(2));
console.log(add5(3));