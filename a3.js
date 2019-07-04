//Check for palindrones
//panlindrone is a word that will reverse spellls of the same thing fowards or backwards
//e.g eye
function palindrone(str) {
    let front = o;
    let back = str.length - 1;
    while (back > front) {
        while (str[front].match([/W_]/)) {
            front++;
            continue;
        }
        while (str[back].match([/W_]/)) {
       
            back--;
            continue;
        }
        if (str[front].tolowercase)!== str[back].tolowercase()) return false;

    }
    return true;
}
console.log(palindrone('eye'));