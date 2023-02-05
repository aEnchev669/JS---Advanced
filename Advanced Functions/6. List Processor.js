function processor(arr) {

    let currArray = [];

    const store = {
        add,
        remove,
        print,
    }

    for (const items of arr) {
        let [command, words] = items.split(' ');

        store[command](words);
    }

    function add(word) {
        currArray.push(word);
    }

    function remove(word){
       while(currArray.includes(word)){
        let index = currArray.indexOf(word);
        currArray.splice(index, 1);
       }
    }

    function print(){
        console.log(currArray.join(','));
    }
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])