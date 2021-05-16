function solve(first, second) {
    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let out;
    for (let i = lower; i >= 0; i--) {
        if (bigger % i == 0 && lower % i == 0) {
            out = i;
            break;
        }
    }
    console.log(out);
}

solve(15, 5);
solve(2154, 458);