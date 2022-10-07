// calculator display elements
let sum = document.querySelector('#display-sum');
let answer = document.querySelector('#display-answer');

let firstNumber = null;
let operator = null;
let secondNumber = null;
let sumTotal = 0;


function renderHtml(firstLine, secondLine) { //helper function
    sum.textContent = firstLine;
    console.log(secondLine)

    // let stringSecondLine = secondLine.toString();
    let fixSecondLine = Number(secondLine).toFixed(2); // converts input number to 2 decimal places
    //console.log(fixSecondLine) 
    let convertNumToStr = String(fixSecondLine) // converts number to string so .length can be used
    //console.log(typeof convertNumToStr)

    let upToAndIncTheDecimal = convertNumToStr.slice(0, convertNumToStr.length - 2); // get length of number + 2 decimals
    console.log(upToAndIncTheDecimal)


    let afterTheDecimal = convertNumToStr.slice(-2);
    console.log(afterTheDecimal)
    console.log(typeof afterTheDecimal)

    // if the last decimal and the first decimal contain zero then toFixed(0)
    // if else the last decimal does contains xero && the first decimal doesn't contain zero -  then toFixed(1) 
    // if else the last decimal and the first decimal don't contain zero the toFixed(2)

    if (afterTheDecimal.charAt(0) === '0' && afterTheDecimal.charAt(1) === '0') {  // no decimal value

        let output = upToAndIncTheDecimal + afterTheDecimal;
        //console.log(typeof output)
        answer.textContent = Number.parseFloat(output).toFixed(0);
    }
    else if (afterTheDecimal.charAt(0) !== '0' && afterTheDecimal.charAt(1) === '0') {  // one decimal place
        let output = upToAndIncTheDecimal + afterTheDecimal;
        answer.textContent = Number.parseFloat(output).toFixed(1);

}
    else if (afterTheDecimal.charAt(0) !== '0' && afterTheDecimal.charAt(1) !== '0') { // two decimal places
        let output = upToAndIncTheDecimal + afterTheDecimal;
        answer.textContent = Number.parseFloat(output).toFixed(2);

  }
}


// calculator keys
let keys = $('.keys'); // OMG this needs fixing!!!!!!
// console.log(keys)

//firstNumber + operator
let display = {
    
    state1: firstNumber + operator;
    state2: operator + firstNumber, 
    fullOperation(){
        return firstNumber + operator + secondNumber
    }
}


dataTypeHandler[dataType][stage]()
let dataTypeHandler = {
    number: {
        stage1: function(value){
            firstNumber = value;
            renderHtml(firstNumber, sumTotal)

        },
        stage2: function(value){
            if (sumTotal !== 0) {
                // user has got something on the screen
                // do you want to overwrite it?
                // renderHtml(null, sumTotal)
                firstNumber = value;
                secondNumber = null;
                operator = null;
                sumTotal = 0;
                renderHtml(firstNumber, sumTotal)
            } else {
                firstNumber += value;
                renderHtml(firstNumber, sumTotal)
            }
        },
        stage3: function(value){
            secondNumber = value;

            if (sumTotal !== 0) {
                renderHtml(operator + secondNumber, sumTotal);

            }
            renderHtml(firstNumber + operator + secondNumber, sumTotal)
        },
        stage4: function(value){
            secondNumber += value;
            if (sumTotal !== 0) {
                renderHtml(operator + secondNumber, sumTotal)
            } else if (sumTotal === 0) {
                renderHtml(display.fullOperation(), sumTotal)
            }
        }
    },
    operator: {
        stage1: function(value){},
        stage2: function(value){
            operator = value;
            if (sumTotal !== 0) {
                renderHtml(operator, sumTotal)
            } else if (sumTotal === 0) {
                renderHtml(firstNumber + operator, sumTotal)
            }
        },
        stage3: function(value){
            operator = value;
            // to only show fisrtNum on first round
            // on our first run sum total will be zero

            if (sumTotal !== 0) {
                renderHtml(operator, sumTotal);
                return;
            }
            renderHtml(firstNumber + operator, sumTotal)
            return;
            
        },
        stage4: function(value){
            
        }

    }

    operator: function (value) {
        let value = e.target.innerText;

        if (isStage1) {
            return;
        }
        if (isStage2) {
            operator = value;
            if (sumTotal !== 0) {
                renderHtml(operator, sumTotal)
            } else if (sumTotal === 0) {
               
                renderHtml(firstNumber + operator, sumTotal)
            }
            return;
        }
        if (isStage3) {
           
        }
        if (isStage4) {
            let result = calculateValue();

            firstNumber = String(result)
            sumTotal = firstNumber;
            secondNumber = null;
            operator = value;
            renderHtml(operator, firstNumber)
            return;
        }
        
    },
}


keys.on('click', function (e) {
    console.log(e.target.attributes) //e is event and .target is element
    console.log(e.target.attributes[1].value)
    let dataType = e.target.attributes[1].value

    let stage;

    if( firstNumber === null && operator === null && secondNumber === null ){
        stage = 'stage1'
    }else if(firstNumber !== null && firstNumber.length >= 1 && operator === null && secondNumber === null){
        stage = 'stage2'
    }else if (firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber === null){
        stage = 'stage3'
    }else if (firstNumber !== null && firstNumber.length >= 1 && operator !== null && secondNumber !== null){
        stage = 'stage4'
    }else{
        throw new Error("Unknown stage.")
    }

    console.log({ stage })


    console.log({ firstNumber })
    console.log({ operator })
    console.log({ secondNumber })
    console.log({ sumTotal })

    // good function:
    // 1. it should only do 1 thing
    // 2. it should not have any side effect (shouldnt change any global var)


    function calculateValue() {

        if (operator === 'x') {
            return Number(firstNumber) * Number(secondNumber);
        } else if (operator === '+') {
            return Number(firstNumber) + Number(secondNumber);
        } else if (operator === '-') {
            return Number(firstNumber) - Number(secondNumber);
        } else if (operator === '/') {
            return Number(firstNumber) / Number(secondNumber);
        } else {
            throw new Error('No operator has been defined');
        }
    }



    // let car = {
    //     name: 'toyota',
    //     drive: function(){

    //     }
    // }

    // car.drive()
    // car["drive"]()


    // reduce nest level && get rid of giants
    // reduce repetition
    // variation -- generalise our code
    
   

    let value = e.target.innerText;
    dataTypeHandler[dataType][stage](value)

    if (dataType === 'operator') {

    }

    if (dataType === 'decimal') {
        let value = e.target.innerText;

        if (isStage1) {
            firstNumber = '0' + value;
            renderHtml(firstNumber, sumTotal)
            return;
        }
        if (isStage2) {
            if (firstNumber.includes('.')) {
                return;
            } else {
                firstNumber += value;
                renderHtml(firstNumber, sumTotal)
                return;
            }
        }
        if (isStage3) {
            secondNumber = '0' + value;
            if (sumTotal !== '0') {
                renderHtml(operator + secondNumber, sumTotal)
                return;
            } else {
                renderHtml(firstNumber + operator + secondNumber, sumTotal)
                return;
            }
        }
        if (isStage4) {
            if (secondNumber.includes('.')) {
                return;
            } else {
                secondNumber += value;
                renderHtml(firstNumber, sumTotal)
                return;
            }
        }
    }

    if (dataType === 'equal') {
        let value = e.target.innerText;

        if (isStage1) {
            renderHtml(0, sumTotal) // workaround without changing logic
            return;
        }
        if (isStage2) {
            renderHtml(firstNumber, sumTotal)
            return;
        }
        if (isStage3) {
            renderHtml(firstNumber + operator, sumTotal)
            return;
        }
        if (isStage4) {
            let result = calculateValue()

            sumTotal = String(result);
            firstNumber = String(result);
            //console.log({sumTotal})
            operator = null;
            secondNumber = null;
            renderHtml(0, sumTotal)
            return;
        }
    }

    if (dataType === 'clear') {
        firstNumber = null;
        operator = null;
        secondNumber = null;
        sumTotal = 0;
        renderHtml('0', sumTotal)
    }

})

