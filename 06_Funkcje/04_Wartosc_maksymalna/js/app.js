const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
let result = 0;

function maxFromArray(numbers) {
    for (let i = 0; i < numbers.lenght; i++){
     if ( result <= numbers[i]) {
         result = numbers[i];
     }
     console.log(result);
    }
}
console.log("Najwieksza Wartosc:");
      maxFromArray(randomNumbers);
/**
 * Write your code below!
 */
