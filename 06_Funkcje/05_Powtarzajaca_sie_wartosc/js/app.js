const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4, 6];


function indexOfRepeatedValue(array){
    for (let i = 0; i < array.Length; i++){
        let firstIndex = 0;
        for ( let firstIndex = array.Length; firstIndex >= 0; firstIndex--  ){
            if ( array[i] == array[firstIndex]){
                console.log(firstIndex);
            }
        }
    }
}
indexOfRepeatedValue(numbers);

/**
 * Write your code below!
 */
