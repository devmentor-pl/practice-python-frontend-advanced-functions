
const sum = function(number) {
    let total = 0;
    for(let i=0; i <= number; i++){
        total += i;
    }
    return total;
}

console.log(sum(4));