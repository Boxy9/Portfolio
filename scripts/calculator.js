const equivalentCheck= () => {
    if (parseInt(document.getElementById("equivalent").value)){
        document.getElementById("equivalent").value = 0;
        document.getElementById("result").value = 0;
    }
}
const input = x => {
    equivalentCheck();
    let y = parseFloat(document.getElementById("result").value);
    if(document.getElementById("decimalVar").value == 0)
    {
        x += y * 10;
        document.getElementById("result").value = x;
    }
    else
    {
        let decimalCount = parseInt(document.getElementById("decimalVar").value);
        if (decimalCount == 1)
        {
            x /= 10;
            y += x;
            document.getElementById("result").value = y;
        }
        else
        {
            document.getElementById("result").value += x; 
        }
    
        decimalCount++;
        document.getElementById("decimalVar").value = decimalCount;
    }
}
function operators(x){

    switch (x) {
        case 1:
            document.getElementById("operation").value = 1; //add
            break;
        case 2:
            document.getElementById("operation").value = 2; //subtract
            break;
        case 3:
            document.getElementById("operation").value = 3; // multiply
            break;
        case 4:
            document.getElementById("operation").value = 4; // divide
            break;
        default:
    }

    operandcheck();
    
}
function operandcheck(){
    if(document.getElementById("operand").value == "")
    {
        document.getElementById("operand").value = document.getElementById("result").value;
        document.getElementById("equivalent").value = 1;
    }
    else
    {
        operatorcheck();
    }
    document.getElementById("decimalVar").value = 0;
}
function operatorcheck() {
    let a = parseFloat(document.getElementById("operand").value);
    let b = parseFloat(document.getElementById("result").value);
    switch (parseInt(document.getElementById("operation").value)) {
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

    document.getElementById("operand").value = a;
    document.getElementById("result").value = a;
    document.getElementById("equivalent").value = 1;
}
function equals() {
    operators(parseInt(document.getElementById("operation").value));
    document.getElementById("result").value = document.getElementById("operand").value;
    document.getElementById("operand").value = "";
    document.getElementById("equivalent").value = 1;
    document.getElementById("decimalVar").value = 0;
}
function allclear() {
    document.getElementById("result").value = 0;
    document.getElementById("operand").value = "";
    document.getElementById("operation").value = 0;
    document.getElementById("equivalent").value = 0;
    document.getElementById("decimalVar").value = 0;
}
function plusminus() {
    let x = parseFloat(document.getElementById("result").value);

    x *= -1;

    document.getElementById("result").value =  x;
}
function percent() {
    let x = parseFloat(document.getElementById("result").value);

    x *= 0.01;

    document.getElementById("result").value =  x;
}
function square(){
    let x = parseFloat(document.getElementById("result").value);

    x *= x;

    document.getElementById("result").value =  x;
}
function decimalpoint() {
    if (document.getElementById("decimalVar").value == 0)
    {
        document.getElementById("decimalVar").value = 1;
        document.getElementById("result").value = document.getElementById("result").value + ".";
    }
    /* if (parseInt(document.getElementById("operation").value))
    {
        document.getElementById("result").value = 0;
    } */
}