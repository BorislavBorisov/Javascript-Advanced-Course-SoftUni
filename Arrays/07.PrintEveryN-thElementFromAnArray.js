function solve(arr, number) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % number === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));