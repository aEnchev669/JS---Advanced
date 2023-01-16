function addNRemove(arr) {
    let num = 1;
    let result = [];

    arr.forEach(element => {
        if (element === 'add') {
            result.push(num)
        }
        else if (element === 'remove') {
            result.pop();
        }
        
        num++;
    });

    console.log(  result.length != 0 ? result.join('\n') : 'Empty');
}

addNRemove();