// scrivo un ciclo di numeri che si ripete da 1 a 100
const listaNum = document.getElementById("listaNum");
let numLi;

for (let i = 1; i <= 100; i++) {
    // do delle condizioni nel caso il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        numLi = "FIZZBUZZ";
    }
    // do delle condizioni nel caso il numero è divisibile per 3
    else if (i % 3 === 0) {
        numLi = "FIZZ";
    }
    // do delle condizioni nel caso il numero è divisibile per 5
    else if (i % 5 === 0) {
        numLi = "BUZZ";
    }
    else {
        numLi = i
    }

    console.log(numLi);

    listaNum.innerHTML += `<li>${numLi}</li>`
}

