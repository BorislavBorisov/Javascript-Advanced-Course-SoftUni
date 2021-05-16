function solve(args) {
    let [n, m, a, b] = args;
    let arr = Array.from(Array(n), () => new Array(m).fill(0));
    arr[a][b] = 1;
    fixNeighbours(a, b, 2)
 
 
    for (let index = a; index < arr.length; index++) {
        for (let second = b + 1; second < arr[index].length; second++) {
            fixNeighbours(index, second, arr[index][second] + 1);
        }
        for (let second = b - 1; second >= 0; second--) {
            fixNeighbours(index, second, arr[index][second] + 1);
        }
    }
    for (let index = a - 1; index >= 0; index--) {
        for (let second = b + 1; second < arr[index].length; second++) {
            fixNeighbours(index, second, arr[index][second] + 1);
        }
        for (let second = b - 1; second >= 0; second--) {
            fixNeighbours(index, second, arr[index][second] + 1);
        }
    }
 
 
 
    function fixNeighbours(x, y, num) {
        if (arr[x - 1]) {
            if (arr[x - 1][y] == 0) {
                arr[x - 1][y] = num;
            }
            if (arr[x - 1][y - 1] == 0) {
                arr[x - 1][y - 1] = num;
            }
            if (arr[x - 1][y + 1] == 0) {
                arr[x - 1][y + 1] = num;
            }
        }
 
        if (arr[x][y - 1] == 0) {
            arr[x][y - 1] = num;
 
        }
        if (arr[x][y + 1] == 0) {
            arr[x][y + 1] = num;
        }
 
        if (arr[x + 1]) {
            if (arr[x + 1][y] == 0) {
                arr[x + 1][y] = num;
            }
            if (arr[x + 1][y - 1] == 0) {
                arr[x + 1][y - 1] = num;
            }
            if (arr[x + 1][y + 1] == 0) {
                arr[x + 1][y + 1] = num;
            }
        }
 
    }
    return arr.map(el => el.join(' ')).join('\n');
}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)