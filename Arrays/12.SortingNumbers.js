function solve(arr) {
    let sorted = arr.sort((a, b) => a - b);

    let result = [];

    while (sorted != 0) {
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));