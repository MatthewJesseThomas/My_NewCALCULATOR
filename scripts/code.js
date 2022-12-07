let myBtnOnScreen = [
        document.querySelectorAll('.one'),
        document.querySelectorAll('.two'),
        document.querySelectorAll('.three'),
        document.querySelectorAll('.four'),
        document.querySelectorAll('.five'),
        document.querySelectorAll('.six'),
        document.querySelectorAll('.seven'),
        document.querySelectorAll('.eight'),
        document.querySelectorAll('.nine'),
        document.querySelectorAll('.zero')
    ];

const output = document.querySelectorAll('outputDisplay');
const calc = document.getElementById('#equals');
const numberValue = document.getElementById('value');

let previousOperand = document.querySelectorAll('previousOperand');
let currentOperand = document.querySelectorAll('currentOperand');
let operand = document.querySelectorAll('operations');

function calculate() {
    const prevValue = parseFloat(previousOperand)
    const currentValue = parseFloat(currentOperand)
    let computation;

calc.addEventListener('click', event => {
    calculate(event.target.value)
})

const numbers = document.querySelectorAll('.numers').forEach(item => {
    item.addEventListener('click', event => {
        (event.target.value)
    })
});


const operators = document.querySelectorAll('.operators').forEach(item => {
    item.addEventListener('click', event => {
        operand = event.target.value
        output.innerHTML(operand);
        numberValue.value = '.';
    })
});
const numers = document.querySelectorAll('.numers').forEach(item => {
    item.addEventListener('click', event => {
        operand = event.target.value
        output.innerHTML(operand);
        numberValue.value = Number;
    })
});

    if (isNaN(prevValue) || isNaN(currentValue)) return
    switch (operation) {
        case '+':
            computation = prevValue + currentValue
            break
        case '-':
            computation = prevValue - currentValue
            break
        case '*':
            computation = prevValue * currentValue
            break
        case '÷':
            computation = prevValue / currentValue
            break
        default:
            return ''
    }
    output.innerHTML(operation);
};


function figureItOut(calcuate)  {
    output.innerHTML = '';

};


// function CalculateValue({
//     const numPrevious = parseFloat(previousOperand);
//     const numCurrent = parseFloat(currentOperand);
//     let rekenaar = null;

//     switch (operand) {
//         case '+':
//             rekenaar = numPrevious + current
//             break
//         case '-':
//             rekenaar = numPrevious - current
//             break
//         case '*':
//             rekenaar = numPrevious * current
//             break
//         case '÷':
//             rekenaar = numPrevious / current
//             break
//         default:
//             return    
//     }

//     output.value(rekenaar)
// });