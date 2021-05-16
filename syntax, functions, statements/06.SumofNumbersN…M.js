function sovle(num1, num2) {

    let numberOne = Number(num1);
    let numberTwo = Number(num2);

    let result = 0;

    for (let index = numberOne; index <= numberTwo; index++) {
        result += index;

    }

    console.log(result);
}

sovle('1', '5' );
sovle('-8', '20' );