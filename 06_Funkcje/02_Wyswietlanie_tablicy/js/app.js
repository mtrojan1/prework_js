const people = ["John", "Ive", "Donna", "Chris"];

/**
 * Write your code below!
 */
 function print2DArray(array){
     for( let i = 0; i < array.lenght; i++){
         console.log(array[i]);
     }
}
console.log("People:");
 print2DArray(people);

/**
 * Do NOT modify code below!
 */
module.exports = typeof printArray === "undefined" ? null : printArray;
