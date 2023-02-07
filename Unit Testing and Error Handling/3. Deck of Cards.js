function cardFactory(arr) {

    let arrResult = [];
    const faces = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    for (const card of arr) {
        let face = card.slice(0, -1);
        let suit = card[card.length - 1];

        if (!(faces.includes(face)) || suit in suits == false) {

            console.log(`Invalid card: ${card}`);
            return;
        }
        // const result = {
        //     face,
        //     suit,
        //     toString() {
        //         return this.face + suits[this.suit];
        //     }
        // }
        arrResult.push(face + suits[suit]);

    }
    console.log(arrResult);
}


cardFactory(['AS', '10D', 'KH', '2C']);
cardFactory(['5S', '3D', 'QD', '1C']);
   


 