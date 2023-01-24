function solve(arr) {
    const towns = [];

    for (let i = 1; i < arr.length; i++) {

        let tokens = arr[i].split('|');

        let town = tokens[1].trim();
        let latitude = Number(tokens[2]).toFixed(2);
        let longitude = Number(tokens[3]).toFixed(2);
     
        const currObj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        }
        towns.push(currObj);
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);