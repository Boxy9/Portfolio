let result = "0";
let decimalVar = "0";
let equivalent = "0";
let operation = 0;
let operand = "";
function input(x) {
    equivalentCheck();
    let y = parseFloat(result);
    if (decimalVar == 0) {
        x += y * 10;
        result = x;
    }
    else {
        let decimalCount = parseInt(decimalVar);
        if (decimalCount == 1) {
            x *= 1 / 10;
            y += x;
            result = y;
        }
        else {
            result += x;
        }

        decimalCount++;
        decimalVar = decimalCount;
    }

}
function equivalentCheck() {
    if (parseInt(equivalent)) {
        equivalent = 0;
        result = 0;
    }
}
function operators(x) {

    switch (x) {
        case 1:
            operation = 1; //add
            break;
        case 2:
            operation = 2; //subtract
            break;
        case 3:
            operation = 3; // multiply
            break;
        case 4:
            operation = 4; // divide
            break;
        default:
    }

    operandcheck();

}
function operandcheck() {
    if (operand == "") {
        operand = result;
        equivalent = 1;
    }
    else {
        operatorcheck();
    }
    decimalVar = 0;
}
function operatorcheck() {
    let a = parseFloat(operand);
    let b = parseFloat(result);
    switch (parseInt(operation)) {
        case 1: //add
            a += b;
            break;
        case 2: //subtract
            a -= b;
            break;
        case 3: //multiply
            a *= b;
            break;
        case 4: // divide
            a /= b;
            break;
        default:
    }

    operand = a;
    result = a;
    equivalent = 1;
    decimalVar = 0;
}
function equals() {
    operators(parseInt(operation));
    result = operand;
    operand = "";
    equivalent = 1;
    decimalVar = 0;
}
function allclear() {
    result = 0;
    operand= "";
    operation = 0;
    equivalent = 0;
    decimalVar = 0;
}
function plusminus() {
    let x = parseFloat(result);

    x *= -1;

    result = x;
}
function percent() {
    let x = parseFloat(result);

    x *= 0.01;

    result = x;
}
function square() {
    let x = parseFloat(result);

    x *= x;

    result = x;
}
function decimalpoint() {
    if (decimalVar == 0) {
        decimalVar = 1;
        result = result + ".";
    }
    /* if (parseInt(operation))
    {
        result = 0;
    } */
}
input(1);
console.log(`0 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
decimalpoint();
console.log(`1 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
input(6);
console.log(`2 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
operators(3);
console.log(`3 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
input(1);
console.log(`0 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
decimalpoint();
console.log(`1 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
input(6);
console.log(`2 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);
equals();
console.log(`3 DecimalVar:-  ${decimalVar}`);
console.log(`Result:- ${result}`);
console.log(`Equivalent;- ${equivalent}`);
console.log(`Operand:- ${operand}`);