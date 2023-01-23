function factory({ model, power, color, carriage, wheelsize }) {

    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let engine = {};
    if (power <= 90) {
        engine = engines.small;
    }
    else if (power <= 120) {
        engine = engines.normal;
    }
    else {
        engine = engines.monster;
    }

    if (wheelsize % 2 == 0) {
        wheelsize--;
    }

    let wheels = Array(4).fill(wheelsize);

    let car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color: color,
        },
        wheels
    };
    console.table(car);
}

factory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
});