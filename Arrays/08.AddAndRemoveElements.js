function solve(array) {
    let out = [];
    let count = 1;

    array.forEach(command => {
        if (command === 'add') {
            out.push(count);
        } else {
            out.pop();
        }
        count++;
    })

    out.length == 0 ? console.log("Empty") : console.log(out.join("\n"));
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);