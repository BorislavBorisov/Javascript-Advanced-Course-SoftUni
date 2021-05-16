function solve(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b));

    let count = 1;
    for (let i = 0; i < result.length; i++) {
        console.log(`${count}.${result[i]}`);
        count++;
    }
}

solve(["John", "Bob", "Christina", "Ema"])