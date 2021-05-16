function solve(speed, area) {
    let difference = 0;
    let motorwatMaxSpeed = 130;
    let interstateMaxSpeed = 90;
    let cityMaxSpeed = 50;
    let residentialMaxSpeed = 20;
    let status = '';

    if (area == 'motorway') {
        difference = speed - motorwatMaxSpeed;
        if (speed > 130 && speed <= 150) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwatMaxSpeed} - ${status}`);
        } else if (speed > 150 && speed <= 170) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwatMaxSpeed} - ${status}`);
        } else if (speed > 170) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwatMaxSpeed} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${motorwatMaxSpeed} zone`);
        }

    } else if (area == 'interstate') {
        difference = speed - interstateMaxSpeed;
        if (speed > 90 && speed <= 110) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateMaxSpeed} - ${status}`);
        } else if (speed > 110 && speed <= 130) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateMaxSpeed} - ${status}`);
        } else if (speed > 130) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateMaxSpeed} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${interstateMaxSpeed} zone`);
        }

    } else if (area == 'city') {
        difference = speed - cityMaxSpeed;
        if (speed > 50 && speed <= 70) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityMaxSpeed} - ${status}`);
        } else if (speed > 70 && speed <= 90) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityMaxSpeed} - ${status}`);
        } else if (speed > 90) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityMaxSpeed} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${cityMaxSpeed} zone`);
        }

    } else if (area == 'residential') {
        difference = speed - residentialMaxSpeed;
        if (speed > 20 && speed <= 40) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialMaxSpeed} - ${status}`);
        } else if (speed > 40 && speed <= 60) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialMaxSpeed} - ${status}`);
        } else if (speed > 60) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialMaxSpeed} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${residentialMaxSpeed} zone`);
        }

    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway'   );