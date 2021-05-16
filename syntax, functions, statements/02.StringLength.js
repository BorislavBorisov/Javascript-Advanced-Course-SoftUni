function solve(param1, param2, param3) {
    let sum;
    let average;

    let first = param1.length;
    let second = param2.length;
    let third = param3.length;

    sum = first + second + third;

    average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);

}

solve('pasta', '5', '22.3');