let operand1 = null;
let operand2 = null;
let operator = null;
let result;
let str='';
const numpad = document.querySelectorAll(".key");
const signs = document.querySelectorAll(".operation");
const equal = document.getElementById('equal');
const display = document.getElementById('display');

function getResult(operand1, operand2, operator){
    let r;

    switch(operator){
        case '+':
        r = Number(operand1)+Number(operand2);
        break;

        case '-':
        r = Number(operand1)-Number(operand2);
        break;

        case '*':
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
    (operator==null) ? operand1 = e.target.innerHTML : operand2 = e.target.innerHTML;
    str+= e.target.innerHTML;
    console.log(operand1);
    console.log(operand2);
    console.log(operator);
    display.innerHTML  = str;
    
}))

signs.forEach((sign)=>sign.addEventListener('click',function(e){
    if(operand1 || operand2)
    {
        if(operator == null){
            operator = e.target.innerHTML;
            str+=operator;
            display.innerHTML  = str;
        }
        else{
            result = getResult(operand1, operand2, operator);
            operand1 = result;
            operand2 = null;
            operator = e.target.innerHTML;
            str= `${result}${operator}`;
            display.innerHTML  = str;

        }
    }
}))

equal.addEventListener('click',function(e){
    if(operand1!=null && operand2!=null && operator!=null){
        result = getResult(operand1, operand2, operator);
        str=str.concat(`=${result}`);
        display.innerHTML  = str;
        console.log(str);
        operand1=null;
        operand2=null;
        operator=null;

    }

})