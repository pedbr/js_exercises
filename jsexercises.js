//Create an array and add three numbers to it.
let numbers = [1, 2, 3] //adding an array with 3 numbers

//Use your array to return the second number.
numbers[1] // calling out the second number of the array, so it will return 2

//What data type is 123/12? "Things in quotes!"? undefined?
//123/12 is a number with an operator, we are dividing 123 by 12
//"Things in quotes" is a String
//undefined in JS is a data type on it's own

//Write an if statement that returns true.

let firstValue = 100;
let secondValue = 200;

if(firstValue != secondValue){
    true
}

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] 
//and emptyArray = []. Use a for loop to add our names to emptyArray. 
//(Hint: n needs to be the length of the array. Google a helper method 
//for finding the length of an array in Javascript. Is it the same as Ruby?)

myArray = ['Thomas', 'Amber', 'Raoul'];

emptyArray = [];

for (let i = 0; i < myArray.length; i++) {
    emptyArray.push(myArray[i]);
  }

