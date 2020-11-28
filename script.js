let operand1 = '';
let operand2 = '';
let operator = '';
let result;
let str='';
let neg_op1 = false;
let neg_op2 = false;
let point_op1 = false;
let point_op2 = false;
const numpad = document.querySelectorAll(".key");
const signs = document.querySelectorAll(".operation");
const equal = document.getElementById('equal');
const display = document.getElementById('display');
const all_clear = document.getElementById('all-clear');
const negate = document.getElementById('negate');
const point = document.getElementById('point');
const clear = document.getElementById('clear');

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
    if(!Number.isInteger(r))
    r = r.toFixed(2);
    return r;
}

function convertToExponent()
{
    if(operand1.length > 0){
        operand1 = Number(operand1).toExponential(2).toString();
    }
    if(operand2.length > 0){
        operand2 = Number(operand2).toExponential(2).toString();
    }
}

function displayString(){
    let a;
    let b;

    str = operand1 + operator + operand2;
    display.setAttribute('style', 'font-size:50px');
        if(str.length > 9){
            if(operand1.length > 9){
            a = Number(operand1).toExponential(1);
            }
            else{
                a = operand1;
            }

            if(operand2.length > 9){
            b = Number(operand2).toExponential(1);
            }
            else{
                b= operand2;
            }

            str = a + operator + b;
            display.setAttribute('style', 'font-size:25px');
        }
    display.innerHTML  = str;
}

numpad.forEach((num)=>num.addEventListener('click',function(e){
    (operator=='') ? operand1 = operand1.concat(e.target.innerHTML) : operand2 = operand2.concat(e.target.innerHTML);
    console.log(operand1);
    console.log(operand2);
    console.log(operator);
    displayString();
    
}))

signs.forEach((sign)=>sign.addEventListener('click',function(e){
    if(operand1 || operand2)
    {
        if(operator == ''){
            operator = e.target.innerHTML;
        }
        else if(operator!='' && operand1!='' && operand2!=''){
            result = getResult(operand1, operand2, operator);
            operand1 = result.toString();
            operand2 = '';
            operator = e.target.innerHTML;
            neg_op2=false;
            point_op2 = false;

        }
    }
    displayString();
}))

equal.addEventListener('click',function(e){
    if(operand1!='' && operand2!='' && operator!=''){
        result = getResult(operand1, operand2, operator);
        console.log(result);
        operand1 = result.toString();
        operand2='';
        operator='';
        neg_op1=false;
        neg_op2=false;
        point_op2 = false;

        displayString();

    }

})

all_clear.addEventListener('click',function(e){

    operand1='';
    operand2='';
    operator='';
    neg_op1=false;
    neg_op2=false;
    point_op1 = false;
    pointop2 = false;

    displayString();

    
})

negate.addEventListener('click',function(e){
    if(operand1!='' || operand2!='')
    {
    if(operator=='' && operand1!='')
    {
        if(!neg_op1){
        neg_op1 = true;
        operand1 = '-'+ operand1;
        }
        else{
        neg_op1 = false;
        operand1 = operand1.replace('-','');
        }
    }
    else if(operand2!=''){
        if(!neg_op2)
        {
            neg_op2 = true;
            operand2 = '-'+ operand2;
        }
        else{
            neg_op2 = false;
            operand2 = operand2.replace('-','');
        }
    }
    displayString();
}
});

point.addEventListener('click', function(e){
    if(operator==''){
        if(!point_op1){
        operand1 = operand1 + '.';
        point_op1 = true; 
        } 
    }
    else{
        if(!point_op2){
            operand2 = operand2+'.'
            point_op2 = true;
        }
    }
    displayString();
});

clear.addEventListener('click',function(e){
    if(operand2!='')
    {
        operand2 = operand2.substring(0,operand2.length-1);
    }
    else if(operator!=''){
        operator='';
    }
    else{
        operand1  = operand1.substring(0,operand1.length-1);
    }
    displayString();
})