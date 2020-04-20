$(document).ready(function () {

  // str storage
  let sumStr = [''];
  let operator = null;
  let total = '';
  const currentIndex = 0;
  let str = [''];
  let btn;


  // button handling
  $('button').on('click', function (e) {

    if (!e.currentTarget.matches('button')) {
      //console.log('This event is not a button!');
      return;
    }

    if (e.currentTarget.matches('[data="data-number"]')) {
      // console.log('number', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-operator"]')) {
      //console.log('operator', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-decimal"]')) {
      //console.log('decimal', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-equal"]')) {
      //console.log('equal', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-clear"]')) {
      //console.log('clear', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    console.log(btn);

    // add value to string and output to display sum
    str[currentIndex] += btn;
    console.log(str);
    $('#display-sum').text(str);

  });


  

  

  // function getNum() {
  //   let firstNum = str.parseInt(str, 10);
  //   console.log(firstNum);
  // }


  // function noDuplication() {
  //   if (!str.includes('.')) {
  //   str += btn;
  //   console.log(str);
  //   }
  // }

  // noDuplication();

  // function inputDecimal(dot) {
  //   // If the `displayValue` does not contain a decimal point
  //   if (!calculator.displayValue.includes(dot)) {
  //     // Append the decimal point
  //     calculator.displayValue += dot;
  //   }
  // }




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




  // $('button').on('click', function (e) {
  //   let btn = e.currentTarget.innerText;
  //   str[currentIndex] += btn;
  //   console.log(str);
  //   $('#display-sum').text(str);
  // });



});