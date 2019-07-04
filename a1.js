//algarithms in javascript
//Reversing strings


//Ex."hello"
//Ex."Gilbert"
//Ex."Greetings from earth"


//1st solution
function reverseString(str) {
    str = str.split('');
    str = str.reverse('');
    str = str.join('');
    return str;
}
console.log(reverseString('hello'));
console.log(reverseString('Gilbert'));
console.log(reverseString('Greetings from earth'));

//2second solution
//we create a varriable called new sring
var newStr = '';
//using a forloop
for (var i = str.length - 1; i >= 0; --1){
    newstr += str[1];
}
return newstr

//3rd solution
var rev = '';
str.split('');
for (var i = str.length - 1; i >= 0; --i) {
    rev += str[i];
}
return rev

//4th solution
function reverseString(str) {
    return str.split('').reverse('').join('');
}