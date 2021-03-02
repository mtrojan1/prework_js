const users = ["John", "Marie", "Kate", "Paul", "Steven"];
console.log( users[1] );
console.log( users[4] );
console.log(users.length);

const guest = [];
guest[0] = "Chauncey";
guest[1] = "Ling";
guest[2] = "Ona";
guest[3] = "Nicole";
guest[4] = "Michaele";

console.log( guest[0] );
console.log( guest[2] );
console.log(guest.length);

const numbers = [];
numbers[0] = [1,2,3,4];
numbers[1] = [5,6,7,8];
numbers[2] = [9,10,11,12];

console.log( numbers[0][1] );
console.log( numbers[0][1] );
console.log( numbers.length[2] );

const mixedValues = [];
mixedValues[0] = ["Keli", "Walter", "Heriberto"];
mixedValues[1] = [1,2,3,4,5,6];

console.log( mixedValues[0][2] );
console.log( mixedValues[1][4] );
console.log( mixedValues.length[1] );

const car = {
    type: "sedan",
    color: "green",
    engine: 2.5
};

const carDescription = car.type + " " + car.color + " " + car.engine;
console.log(carDescription);

const color = {
    red: 100,
    green: 0,
    blue: 50
};

//*const referenceColor = color;
//*referenceColor.red = 50;
//* console.log(referenceColor.red);


const referenceColor = color;
referenceColor.green = 50;







