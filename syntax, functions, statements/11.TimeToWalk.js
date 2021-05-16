function solve(steps, length, speed) {
    let distanceInMeters = steps * length;
    let speedForMeterInSec = speed / 3.6;

    let rest = Math.floor(distanceInMeters / 500);
    let timeInSeconds = distanceInMeters / speedForMeterInSec + rest * 60;

    let timeInHours = Math.floor(timeInSeconds / 3600);
    let timeInMinutes = Math.floor(timeInSeconds / 60);
    let timeinSec = Math.ceil(timeInSeconds % 60);


    console.log(`${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMinutes < 10 ? 0 : ""}${timeInMinutes}:${timeinSec < 10 ? 0 : ""}${timeinSec}`);

}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);