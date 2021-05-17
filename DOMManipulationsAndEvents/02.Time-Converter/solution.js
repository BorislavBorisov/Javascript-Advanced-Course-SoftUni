function attachEventsListeners() {

    let daysTextField = document.getElementById('days');
    let hoursTextField = document.getElementById('hours');
    let minTextField = document.getElementById('minutes');
    let secTextField = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {convert(+daysTextField.value * 86400)});

    document.getElementById('hoursBtn').addEventListener('click', () => {convert(+hoursTextField.value * 3600)});

    document.getElementById('minutesBtn').addEventListener('click', () => {convert(+minTextField.value * 60)});

    document.getElementById('secondsBtn').addEventListener('click', () => {convert(+secTextField.value)});


    function convert(sec = 0) {
        let days = sec / (24 * 60 * 60);
        let hours = sec / (60 * 60);
        let minutes = sec / 60;


        daysTextField.value = days;
        hoursTextField.value = hours;
        minTextField.value = minutes;
        secTextField.value = sec;
    }
}