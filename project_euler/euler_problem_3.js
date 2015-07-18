var largestPrimeFactor = function(n) {
    var current = n;
    var div = 2;
    
    while (div <= current) {
        if (current%div === 0) {
            current = current/div;
        }
        else {
            div++;
        }
    }
    
    return div;
}

window.alert(largestPrimeFactor(600851475143));