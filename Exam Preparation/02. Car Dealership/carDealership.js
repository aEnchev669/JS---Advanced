class CarDealership {
    constructor(name) {
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.name = name;
    }

    _validateModel(value) {
        return typeof value == 'string' && value != '';
    }
    _validateHorsepower(value) {
        return value >= 0 && Number.isInteger(value);
    }
    _validatePriceNMileage(value) {
        return value >= 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!this._validateModel(model) || !this._validateHorsepower(horsepower) || !this._validatePriceNMileage(price) || !this._validatePriceNMileage(mileage)) { // use this
            throw new TypeError("Invalid input!");
        }


        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(c => c.model == model);
        const match = this.availableCars[index];

        if (match == undefined) {
            throw TypeError(`${model} was not found!`) //maybe wrong error
        }

        if (match.mileage - desiredMileage <= 0) {

        }
        else if (match.mileage - desiredMileage <= 40) {
            match.price *= 0.95;
        }
        else if (match.mileage - desiredMileage > 40) {
            match.price *= 0.90;
        }

        this.soldCars.push({
            model: match.model,
            horsepower: match.horsepower,
            soldPrice: match.price,
        });
        this.totalIncome += match.price;
        this.availableCars.splice(index, 1);
        return `${match.model} was sold for ${match.price.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        const result = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        result.unshift("-Available cars:");

        return result.join('\n');

    }

    salesReport(criteria) {

        if (criteria == 'model') {
            this.soldCars.sort((a, b) => b - a);
        }
        else if (criteria == 'horsepower') {
            this.soldCars.sort();
            this.soldCars.reverse();
        }
        else {
            throw TypeError("Invalid criteria!"); //wrong error?
        }

        const result = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        result.unshift(`-${this.soldCars.count} cars sold:`);
        result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        return result.join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
console.log(dealership.salesReport('horsepower'));

