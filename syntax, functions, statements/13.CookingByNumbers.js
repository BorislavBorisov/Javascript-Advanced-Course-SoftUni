function solve(num, in1, in2, in3, in4, in5) {
    let number = +num;

    let arr = [in1, in2, in3, in4, in5];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'chop') {
            number /= 2;
            console.log(number);
        } else if (arr[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (arr[i] == 'spice') {
            number += 1;
            console.log(number);
        } else if (arr[i] == 'bake') {
            number *= 3;
            console.log(number);
        } else if (arr[i] == 'fillet') {
            let forRemove = number * 0.20;
            number -= forRemove;
            console.log(number);
        }

    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');