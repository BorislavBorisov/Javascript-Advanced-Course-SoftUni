function sovle(num1, num2, operator) {
    let sum;

    if (operator == '+') {
        sum = num1 + num2;

    } else if (operator == '-') {
        sum = num1 - num2;

    } else if (operator == '*') {
        sum = num1 * num2;

    } else if (operator == '/') {
        sum = num1 / num2;

    } else if (operator == '%') {
        sum = num1 % num2;

    } else if (operator == '**') {
        sum = num1 ** num2;

    }

    console.log(sum);
}

sovle(5, 6, '+');
sovle(3, 5.5, '*');