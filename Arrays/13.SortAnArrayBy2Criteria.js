function solve(arr) {
    let result = arr.sort(function (a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });

    result.forEach(element => console.log(element));
}

solve(['alpha', 
'beta', 
'gamma']
);

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

solve(['test', 
'Deny', 
'omen', 
'Default']
);