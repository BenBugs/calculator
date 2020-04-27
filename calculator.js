// calculator display elements
let sum = document.querySelector('#display-sum');
let answer = document.querySelector('#display-answer');

let firstNumber = null;
let operator = null;
let secondNumber = null;
let sumTotal = 0;

function renderHtml(firstLine, secondLine) {  //helper function
    sum.textContent = firstLine,
    answer.textContent = secondLine
}

// calculator keys
let keys = $('.keys');
// console.log(keys)

//firstNumber + operator

keys.on('click', function (e) {
    //console.log(e.target.attributes)
    console.log(e.target.attributes[1].value)
    let dataType = e.target.attributes[1].value
    let isStage1 = firstNumber === null && operator === null && secondNumber === null;
    let isStage2 = firstNumber !== null && firstNumber.length >= 1 && operator === null && secondNumber === null;
    let isStage3 = firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber === null;
    let isStage4 = firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber !== null;

   
    console.log({isStage1})
    console.log({isStage2})
    console.log({isStage3})
    console.log({isStage4})

    console.log({firstNumber})
    console.log({operator})
    console.log({secondNumber})
    console.log({sumTotal})


    if (dataType === 'number') {
        let value = e.target.innerText;
        console.log(value)

        if (isStage1) {
            firstNumber = value;
            renderHtml(firstNumber, sumTotal)
            return;
        }
        if (isStage2) {
            firstNumber += value;
            renderHtml(firstNumber, sumTotal)
            return;
        }
        if (isStage3) {
            secondNumber = value;

            if (sumTotal !== 0) {
                renderHtml(operator + secondNumber, sumTotal);
                return;
            }
            renderHtml(firstNumber + operator + secondNumber, sumTotal)
            return;
        }
        if (isStage4) {
            secondNumber += value;
            renderHtml(firstNumber + operator + secondNumber, sumTotal)
            return;
        }

    }

    if (dataType === 'operator') {
        let value = e.target.innerText;

        if (isStage1) {
            return;
        }
        if (isStage2) {
            operator = value;
            renderHtml(firstNumber + operator, sumTotal)
            return;
        }
        if (isStage3) {
            operator = value;
            // to only show fisrtNum on first round
            // on our first run sum total will be zero

            if (sumTotal !== 0) {
                renderHtml(' ' , sumTotal);
                return;
            }
            renderHtml(firstNumber + operator, sumTotal)
            return;
        }
        if (isStage4) {
            if (operator === 'x') {
                firstNumber = Number(firstNumber) * Number(secondNumber);
            } else if (operator === '+') {
                firstNumber = Number(firstNumber) + Number(secondNumber);
            } else if (operator === '-') {
                firstNumber = Number(firstNumber) - Number(secondNumber);
            } else if (operator === '/') {
                firstNumber = Number(firstNumber) / Number(secondNumber);
            }
            firstNumber = String(firstNumber)
            sumTotal = firstNumber;
            secondNumber = null;
            operator = value;
            renderHtml(operator, firstNumber)
            return;
        }
    }

    if (dataType === 'decimal') {
        let value = e.target.innerText;
 
        if (isStage1) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage2) {
            firstNumber += value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage3) {
            secondNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage4) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
    }

    if (dataType === 'equals') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage2) {
            firstNumber += value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage3) {
            secondNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage4) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
    }

    if (dataType === 'clear') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage2) {
            firstNumber += value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage3) {
            secondNumber = value;
            renderHtml(firstNumber, null)
            return;
        }
        if (isStage4) {
            firstNumber = value;
            renderHtml(firstNumber, null)
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
