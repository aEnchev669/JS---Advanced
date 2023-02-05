function solution() {

    let finalText = '';

    function append(text) {
        finalText += text;
    }

    function removeStart(number) {
        finalText = finalText.slice(number);
    }

    function removeEnd(number) {
        finalText = finalText.slice(0, -number);
    }

    function print() {
        console.log(finalText);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();