function town(arr) {
    const result = {};

    for (const item of arr) {
        const [name, population] = item.split(' <-> ');

        if (name in result != false) {
            result[name] += Number(population);
        }
        else {
            result[name] = Number(population);
        }
    }
    console.log(Object
        .entries(result)
        .map(([name, population]) => `${name} : ${population}`)
        .join('\n'));
}
town(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']);