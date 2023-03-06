class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= this.wines.length) {
            let wine = {
                wineName,
                wineType,
                price,
                paid: false,
            }
            this.wines.push(wine);

            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
        else {
            throw Error('Not enough space in the cellar.');

        }

    }

    payWineBottle(wineName, price) {
        const givenWine = this.wines.find(w => w.wineName = wineName);

        if (givenWine == undefined) {
            throw Error(`${wineName} is not in the cellar.`);
        }
        if (givenWine.paid) {
            throw Error(`${wineName} has already been paid.`);
        }
        givenWine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        const index = this.wines.findIndex(w => w.wineName = wineName);
        const givenWine = this.wines[index];

        if (givenWine == undefined) {
            throw Error("The wine, you're looking for, is not found.");
        }
        if (!givenWine.paid) {
            throw Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;

    }

    cellarRevision(wineType) {
        if (wineType === undefined) {
            const emptySlots = this.space > this.wines.length ? this.space - this.wines.length : 0;
            this.wines.sort((a, b) => a.wineName - b.wineName);
            const result = this.wines.map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`);
            result.unshift(`You paid ${this.bill}$ for the wine.`);
            result.unshift(`You have space for ${emptySlots} bottles more.`);

            return result.join('\n');
        }

        const resultWithAuthor = [];
        for (const wine of this.wines) {
            if(book.bookAuthor == bookAuthor){
                resultWithAuthor.push(`${wine.wineName} > ${wine.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`);
            }
        }

        if (resultWithAuthor.length != 0) {
            return resultWithAuthor.join('\n');
        }
        throw TypeError(`There is no ${wineType} in the cellar.`);
    }
}

let selection = new WineSelection(2);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);


