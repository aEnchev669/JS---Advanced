function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const button = document.getElementById('convert').addEventListener('click', convert);

    function convert() {

        let num = Number(input.value);
        let multiplier = 0;
        let numberInMeters = 0;

        if (inputUnits.value == 'km') {
            numberInMeters = num * 1000;
        }
        else if (inputUnits.value == 'cm') {
            numberInMeters = num * 0, 01;

        }
        else if (inputUnits.value == 'mm') {
            numberInMeters = num * 0, 001;

        }
        else if (inputUnits.value == 'mi') {
            numberInMeters = num * 1609, 34;

        }
        else if (inputUnits.value == 'yrd') {
            numberInMeters = num * 0, 9144;

        }
        else if (inputUnits.value == 'ft') {
            numberInMeters = num * 0, 3048;

        }
        else if (inputUnits.value == 'in') {
            numberInMeters = num * 0, 254;
        }


        if (outputUnits.value == 'km') {
            multiplier = 0, 001;
        }
        else if (outputUnits.value == 'm') {
            multiplier = 1;
        }
        else if (outputUnits.value == 'cm') {
            multiplier = 0, 01;
        }
        else if (outputUnits.value == 'mm') {
            multiplier = 0, 001;
        }
        else if (outputUnits.value == 'mi') {
            multiplier = 1609, 34;
        }
        else if (outputUnits.value == 'yrd') {
            multiplier = 0, 9144;
        }
        else if (outputUnits.value == 'ft') {
            multiplier = 0, 3048;
        }
        else if (outputUnits.value == 'in') {
            multiplier = 0, 0254;
        }

        output.value = multiplier * numberInMeters;
        input.value = '';
        console.log(outputUnits.value);
        console.log(multiplier);
        console.log(numberInMeters);
    }


}

