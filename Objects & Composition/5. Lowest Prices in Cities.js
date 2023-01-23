function lowestPrice(arr) {
    let cities = [];
    for (city of arr) {
        let [town, product, price] = city.split(' | ');
        price = Number(price);
        let boolean = true;
        
        
        for (const cittty of cities) {
            if (cittty.product == product) {
                if (cittty.price > price) {
                    cittty.price = price;
                    cittty.town = town;
                }
                boolean = false;
            }
        }
        if(boolean){
            cities.push({ town, product, price });
        }
    }

    for (const city of cities) {
        console.log(`${city.product} -> ${city.price} (${city.town})`);
    }
}



lowestPrice(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);