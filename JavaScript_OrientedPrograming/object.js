var numberArray = ['first' , 'second', 'third'];
console.log("numberArryay[1]: "+numberArray[1]);

var numberObject_string = {
    one : 'first',
    two : 'second',
    three : 'third'
}
console.log("numberObject_string.one: ", numberObject_string.one);
console.log("numberObject_string['one']: ", numberObject_string['one']);

numberObject_string.three = 3;
console.log("numberObject_string['three']: ", numberObject_string['three']);

delete numberObject_string.three;
console.log("numberObject_string:",numberObject_string);
