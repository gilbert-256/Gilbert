//Factoeilzing A number
function Factoeilze(num) {
    var result = num;
    for (var i = num - 1; i > 0; i--){
        result *= i;
    }
    return result;
    
}
console.log(Factoeilze(5));
    console.log(Factoeilze(10));
    console.log(Factoeilze(20));
console.log(Factoeilze(0));

//second solution
    
//we use if statement here
if (num === o) {
    return i;
}
return num = Factoeilze(num - 1);
//3rd solution
//We use for loop
for (var a = i; num >= 1; num--){
    a *= num;
}
return num;
