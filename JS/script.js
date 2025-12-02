// scrivo un ciclo di numeri che si ripete da 1 a 100
const listaNum = document.getElementById("listaNum");
let numLi, classe;


for (let i = 1; i <= 100; i++) {
    // do delle condizioni nel caso il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        numLi = "FIZZBUZZ";
        classe = "fizzbuzz"
    }
    // do delle condizioni nel caso il numero è divisibile per 3
    else if (i % 3 === 0) {
        numLi = "FIZZ";
        classe = "fizz"
    }
    // do delle condizioni nel caso il numero è divisibile per 5
    else if (i % 5 === 0) {
        numLi = "BUZZ";
        classe = "buzz"
    }
    else {
        numLi = i
        classe = "color-none"
    }

    console.log(numLi);

    listaNum.innerHTML += `<li class="${classe}">${numLi}</li>`;
}

