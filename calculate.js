let nums = [0,1,2,3,4,5,6,7,8,9,'.','%','R','+','-','*','/','D','C',"equal"];
// R = squr root, D = delete all, C = delete one equal = '='
let buttons = document.querySelectorAll(".btns");

let value1 = '';
let value2 = '';
let operator = null;
let result = document.querySelector(".output");
let operator2 = document.querySelector(".operator");
let operand = document.querySelector(".operand1");

for(let btn of buttons){
    btn.addEventListener("click", function(){
        performTask(this);
    });
}

function performTask(btn) {
    const val = nums[btn.id];
    
    if (((val >= 0 && val <= 9) || val === '.') && value1.length <= 15) {
        value1 += val;
        result.innerHTML =cd  value1;
    } else if (['+', '-', '*', '/', '%'].includes(val)) {
        if (value1 !== '') {
            operator = val;
            operator2.innerHTML = val;
            operand.innerHTML = value2 = value1;
            value1 = '';
        }
    } else if (val === 'R') {
        if (value1 !== '') {
            result.innerHTML = Math.sqrt(parseFloat(value1));
            value1 = '';
            value2 = '';
        }
    } else if (val === 'D') {
        result.innerHTML = operator2.innerHTML = operand.innerHTML = "";
        value1 = value2 = '';
        operator = null;
    } else if (val === 'C' && value1.length > 0) {
        value1 = value1.slice(0, -1);
        result.innerHTML = value1;
    } else if (val === 'equal') {
        if (value1 !== '' && value2 !== '' && operator) {
            let operation = performOperation[operator](parseFloat(value2), parseFloat(value1));
            result.innerHTML = operation;
            value1 = operation.toString();
            value2 = '';
            operator = null;
            operand.innerHTML = '';
            operator2.innerHTML = '';
        }
    }
}

const performOperation = {
    '+': (firstop, secondop) => firstop + secondop,
    '-': (firstop, secondop) => firstop - secondop,
    '*': (firstop, secondop) => firstop * secondop,
    '/': (firstop, secondop) => firstop / secondop,
    '%': (firstop, secondop) => firstop % secondop,
};
