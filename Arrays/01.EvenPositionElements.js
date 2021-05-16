function solve(array) {

    let out = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            out.push(array[i]);
        }

    }
    console.log(out.join(' '));

}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);