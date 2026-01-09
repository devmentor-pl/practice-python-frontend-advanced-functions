const giveMeMaxSum = function(userInput) {

    let result = 0;
    for (let i=1; i<=userInput; i++){
        result = result+i;
    }
    return result;
    
}
  
const userInput = parseInt(prompt("podaj liczbę do której sumujemy"));

const sum1 = giveMeMaxSum(userInput);
console.log(sum1)