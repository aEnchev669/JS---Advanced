function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;

    return {
        init,
        add,
        subtract,
    }
    function init(num1, num2, result) {
        num1 = document.getElementById(num1);
        num2 = document.getElementById(num2);
        result = document.getElementById(result);
    }
    function add() {
        result.value = Number(num1.value) + Number(num1.value);
    }
    function subtract() {
        result.value = Number(num1.value) - Number(num1.value);
    }
}




