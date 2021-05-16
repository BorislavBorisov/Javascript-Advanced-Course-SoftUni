function solve(x, y, z) {
    let result;
    if (x > y && x > z) {
        result = x;
    }
    if (y > x && y > z) {
        result = y;
    }
    if (z > x && z > y) {
        result = z;
    }
    console.log(`The largest number is ${result}.`);
};

solve(5, -3, 16);