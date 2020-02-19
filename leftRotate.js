//Functio to rotate an array 
//NOTE rotation in this code is "d".

const rotations = 3;
const myArray = [1, 2, 3, 4, 5];

function leftRotation(array, noOfRotations) {
  const rotatedArray = array.concat();
  for (let i = 0; i < noOfRotations; i++) {
    const startingItems = rotatedArray.shift();
    rotatedArray.push(startingItems);
  }
  return rotatedArray;
};



console.log(leftRotation(myArray, rotations))