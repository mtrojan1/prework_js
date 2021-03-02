const users = [["Jaydn Humphries", "Ayda Orozco"], ["Sanjeev Wilkinson", "Jorge Markham"]];

/**
 * Write your code below!
 */
function print2DArray(array) {
    for (let i = 1; i < array.lenght; i++) {
        for (let j = 1; j < array.lenght; j++) {
            console.log(array[i][j]);
        }
    }
}
console.log("Users:");
    print2DArray(users);

/**
 * Do NOT modify code below!
 */
module.exports = typeof print2DArray === "undefined" ? null : print2DArray;
