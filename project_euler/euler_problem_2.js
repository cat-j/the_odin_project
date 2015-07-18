prev = 1;
next = 2;

total = 0;

while (next < 4000000) {
    if (next%2 === 0) {
        total = total + next;
    }
    
    next = next + prev;
    prev = next - prev;
}

window.alert(total);