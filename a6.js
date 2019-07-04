//Repeating sring
//we take a varriable and repeat it
function repeatSringNumTimes(str,num){
    if (num > 0) {
        return str.repeat(num);
    }
    return "";
}
console.log(repeatSringNumTimes('cansy appl', -1))
console.log(repeatSringNumTimes('cansy appl',4))