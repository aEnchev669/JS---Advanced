function encodeAndDecodeMessages() {
    const textArea = document.querySelectorAll('textarea');
    const allButtons = document.querySelectorAll('button');

    allButtons[0].addEventListener('click', encode);
    allButtons[1].addEventListener('click', decode);

    function encode() {
        let text = '';
        let input = textArea[0].value;

        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            text += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textArea[1].value = text;
        textArea[0].value = '';
    }
    function decode() {
        let text = '';
        let input = textArea[1].value;

        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            text += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        textArea[1].value = text;
       
    }
}