function isPrime(number) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i == 0){
            check = false;
            break;
        }
    }
    return check;
}

for (let j = 2; j < 10000; j++) {
    if (isPrime(j) == true){
        document.writeln(j);
    }
}