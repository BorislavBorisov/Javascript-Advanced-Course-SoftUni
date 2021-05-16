function solve(number) {

    let sum = 0;
    let lastDigit = 0;
    let equalCount = 0;
    while (number / 10 > 0) {
        let digit = number % 10;
        sum += digit;

        if (digit !== lastDigit && lastDigit != 0) {
            equalCount++;
        }

        lastDigit = digit;
        number = Math.floor(number / 10);
    }
    console.log(equalCount === 0 ? true : false);
    console.log(sum);
}

solve(2222222);
solve(1234);