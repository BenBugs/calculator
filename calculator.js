// calculator display elements
const sum = document.querySelector('#display-sum');
const answer = document.querySelector('#display-answer');

console.log(sum)
console.log(answer)

let firstNumber = null;
let operator = null;
let secondNumber = null;

function renderHtml(firstLine, secondLine){  //helper function
    sum.textContent = firstLine,
    answer.textContent = secondLine
}

// calculator keys
let keys = $('.keys');
console.log(keys)

firstNumber + operator

keys.on('click', function (e) {
    console.log(e.target.attributes)
    console.log(e.target.attributes[1].value)
    let dataType = e.target.attributes[1].value
    let isStage1 = firstNumber === null && operator === null && secondNumber === null;
    let isStage2 = firstNumber !== null && firstNumber.length >= 1 && operator === null && secondNumber === null;
    let isStage3 = firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber === null;
    let isStage4 = firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber !== null;


    if (dataType === 'number') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage2) {
            firstNumber += value;
            return;
        }
        if (isStage3) {
            secondNumber = value;
            return;
        }
        if (isStage4) {
            firstNumber = value;
            return;
        }

    }
    if (dataType === 'operator') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            return;
        }
        if (isStage2) {
            firstNumber = value;
            return;
        }
        if (isStage3) {
            firstNumber = value;
            return;
        }
        if (isStage4) {
            firstNumber = value;
            return;
        }
 
    }
    if (dataType === 'decimal') {
        let value = e.target.innerText;
 
        if (isStage1) {
            firstNumber = value;
            return;
        }
        if (isStage2) {
            firstNumber = value;
            return;
        }
        if (isStage3) {
            firstNumber = value;
            return;
        }
        if (isStage4) {
            firstNumber = value;
            return;
        }
    }
    if (dataType === 'equals') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            return;
        }
        if (isStage2) {
            firstNumber = value;
            return;
        }
        if (isStage3) {
            firstNumber = value;
            return;
        }
        if (isStage4) {
            firstNumber = value;
            return;
        }
    }
    if (dataType === 'clear') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            return;
        }
        if (isStage2) {
            firstNumber = value;
            return;
        }
        if (isStage3) {
            firstNumber = value;
            return;
        }
        if (isStage4) {
            firstNumber = value;
            return;
        }
    }
        
})


// let keyType = keys.dataset.type;

// keys.addEventListener('click', e => {
//     console.log(e.target)
// // if (e.target)
//  })




// const article = document.querySelector('#electric-cars');

// article.dataset.columns // "3"
// article.dataset.indexNumber // "12314"
// article.dataset.parent // "cars"
