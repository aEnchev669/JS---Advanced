function attachEventsListeners() {

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        const parent = event.target.parentElement;

        if (parent.textContent.includes('Days')) {
            days = Number(daysInput.value);
            hours = 24 * days;
            minutes = 1440 * days;
            seconds = 86400 * days;
        }
        else if (parent.textContent.includes('Hours')) {
            hours = Number(hoursInput.value);
            days = hours / 24;
            minutes = 1440 * days;
            seconds = 86400 * days;
        }
        else if (parent.textContent.includes('Minutes')) {
            minutes = Number(minutesInput.value);
            days = minutes / 1440;
            hours = 24 * days;
            seconds = 86400 * days;
        }
        else if (parent.textContent.includes('Second')) {
            seconds = Number(secondsInput.value);
            days = seconds / 86400;
            hours = 24 * days;
            minutes = 1440 * days;
        }
        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }
}