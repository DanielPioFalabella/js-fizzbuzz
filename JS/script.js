// scrivo un ciclo di numeri che si ripete da 1 a 100
for (let i = 1; i <= 100; i++) {
    // do delle condizioni nel caso il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    // do delle condizioni nel caso il numero è divisibile per 3
    else if (i % 3 === 0) {
        console.log("BUZZ");
    }
    // do delle condizioni nel caso il numero è divisibile per 5
    else if (i % 5 === 0) {
        console.log("FIZZ");
    }
    else {
        console.log(i.);
    }
}
