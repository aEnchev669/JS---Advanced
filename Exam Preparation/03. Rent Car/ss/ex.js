class WineSelection {
    constructor(space) {
        this.space = space;
        wines = [];
        bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space > this.wines.length) {
            let wine = {
                wineName,
                wineType,
                price,
                paid: false,
            }
            wines.push(wine);

            return `You reserved a bottle of ${wineName} ${wineType} wine. `;
        }
        else{
            throw Error("Not enough space in the cellar.");

        }

    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
