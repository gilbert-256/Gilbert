//Title case sentence
function titleCase(str) {
    str = str.split('');
    //we use for loop here
    for (var i = 0; i < str.length; i++){
        str[i] = str[i].tolowerCase().split('');
        str[i][0] - str[i][0].toUpperCase();
        str[i] = str[1].join('');
        

        
    }
    return str.join('');
}
console.log(titleCase("1 am intermediate software devloper"));