var sum = 0;

for (var count=1; count<1000; count++) {
    if (count%5 === 0 || count%3 === 0) {
        sum += count;
    }
}

window.alert(sum);