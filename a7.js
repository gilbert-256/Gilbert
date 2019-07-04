//Truncate string
function truncateString() {
    if (length.str > num && num > 3) {
        return str.slice(o, (num - 3)) + '...';
    } else if(length.str > num && num <= 3) {
            return str.slice(o, num) + '...';
        }
    }else {
        return str;
    }