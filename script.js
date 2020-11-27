let operand1 = '';
let operand2 = '';
let operator = '';
let result;
let str='';
const numpad = document.querySelectorAll(".key");
const signs = document.querySelectorAll(".operation");
const equal = document.getElementById('equal');
const display = document.getElementById('display');
const all_clear = document.getElementById('all-clear');

function getResult(operand1, operand2, operator){
    let r;

    switch(operator){
        case '+':
        r = Number(operand1)+Number(operand2);
        break;

        case '-':
        r = Number(operand1)-Number(operand2);
        break;

        case 'x':
        r = Number(operand1)*Number(operand2);
        break;

        case '%':
        r = Number(operand1)%Number(operand2);
        break;

        case '/':
        r = Number(operand1)/Number(operand2);
        break;
        
    }
    return r;
}

numpad.forEach((num)=>num.addEventListener('click',function(e){
    (operator=='') ? operand1 = operand1.concat(e.target.innerHTML) : operand2 = operand2.concat(e.target.innerHTML);
    str+= e.target.innerHTML;
    console.log(operand1);
    console.log(operand2);
    console.log(operator);
    display.innerHTML  = str;
    
}))

signs.forEach((sign)=>sign.addEventListener('click',function(e){
    if(operand1 || operand2)
    {
        if(operator == ''){
            operator = e.target.innerHTML;
            str+=operator;
            display.innerHTML  = str;
        }
        else{
            result = getResult(operand1, operand2, operator);
            operand1 = result;
            operand2 = '';
            operator = e.target.innerHTML;
            str= `${result}${operator}`;
            display.innerHTML  = str;

        }
    }
}))

equal.addEventListener('click',function(e){
    if(operand1!='' && operand2!='' && operator!=''){
        result = getResult(operand1, operand2, operator);
        str=`${result}`;
        display.innerHTML  = str;
        console.log(str);
        operand1='';
        operand2='';
        operator='';
        str='';

    }

})

all_clear.addEventListener('click',function(e){

    operand1='';
    operand2='';
    operator='';
    str = '';
    display.innerHTML  = str;

    
})