$(document).ready(function () {


    // storage
    const displaySum = document.getElementById('display-sum');
    const displayAnswer = document.getElementById('display-answer');
    const keys = document.querySelector('.calculator-keys');



    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action




        }
       })








    // //case function to handle operators
    // function handleTotal() {
    //     switch (operator) {
    //         case '+':
    //             total = +num1 + +num2;      // + before variable '+num1' converts to string!!!!!!      
    //             displayButton(total);
    //             break;
    //         case '-':
    //             total = +num1 - +num2;
    //             displayButton(total);
    //             break;
    //         case 'x':
    //             total = +num1 * +num2;
    //             displayButton(total);
    //             break;
    //         case '/':
    //             total = +num1 / +num2;
    //             displayButton(total);
    //             break;
    //     }
    //     updateVariables();
    // }







});