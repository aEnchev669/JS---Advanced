const { expect } = require('chai');

const findNewApartment = require('./rentCar');


describe("Tests", function () {
    // it('wrong city value', () => {
    //     const city = 'a';
    //     const yes = true;
    //     const result = findNewApartment.isGoodLocation(city, yes);
    //     expect(result).to.equal("This location is not suitable for you.")
    // });
    // it('boolen false', () => {
    //     let boolen = false;
    //     const result = findNewApartment.isGoodLocation('Sofia', boolen);
    //     expect(result).to.equal("There is no public transport in area.");
    // })
    it('asdasda false', () => {
        let boolen = false;


        expect(() => {
            findNewApartment.isGoodLocation(1, boolen);
        }).to.throw();
    })

    it('islarge invalid aaray', () => {

        expect(() => {
            findNewApartment.isLargeEnough('azis', 1);
        }).to.throw();
    })
    it('islarge invalid aaray', () => {

        
        const result = findNewApartment.isLargeEnough([40, 50, 60],100 );
        expect(result).to.equal("There is no public transport in area.");
    })
});