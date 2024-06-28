/* 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330 */

function circuitPower(voltage,current){
    return voltage * current;
};
console.log(circuitPower(110,3));



/* 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.*/

function findMaxNumber(arrNum){
    if(arrNum.length === 0){
        return null;
    }
    return Math.max(...arrNum);
};
console.log(findMaxNumber([2,5,31,6]));



/* 3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.*/

function mergeArrays(arr1,arr2){
    return [...arr1,...arr2];
};
console.log(mergeArrays(["apple","banana"],["candy","dates"]));



/* 4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]*/

function arrayValuesTypes(arr){
    return arr.map((item) => typeof item);
};
console.log(arrayValuesTypes([1,"sumon",true,null,[],{}]));

