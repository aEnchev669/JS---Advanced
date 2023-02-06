function argInfo() {

    const arr = Array.from(arguments);
    let numbers = [];
    let strings = [];
    let functions = [];
    for (const type of arr) {
        if (typeof type === 'number') {
            numbers.push(type);
        }
        else if (typeof type === 'string') {
            strings.push(type);
        }
        else if (typeof type === 'function') {
            functions.push(type);
        }
    }

    console.log(`string: ${strings}`);
    console.log(`number: ${numbers}`);
    console.log(`function: ${functions}`);
    let arrOfCounts = [numbers.length, strings.length, functions.length];

    let arrs = {
        numebrs: numbers.length,
        strings: strings.length,
        functions: functions.length,
    }

    const sortable = Object.entries(arrs).sort((a,b) => b[1] - a[1]);
    
    for (const word of sortable) {
        console.log(word[0] + ' = ' + word[1]);
    }

}

argInfo('cat', 42, function () { console.log('Hello world!'); });

