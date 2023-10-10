const equivalentCheck = () => {
    if (parseInt(document.getElementById("equivalent").value)) {
        document.getElementById("equivalent").value = 0;
        document.getElementById("result").value = 0;
    }
}
const input = x => {
    equivalentCheck();
    let y = parseFloat(document.getElementById("result").value);
    if (document.getElementById("decimalVar").value == 0) {
        x += y * 10;
        document.getElementById("result").value = x;
    }
    else {
        let deciCnt = document.getElementById("decimalVar").value;

        x *= 1 / (10 ** deciCnt); 
        y += x.toFixed(deciCnt) * 1;  // * 1 - to make it a number.
        document.getElementById("result").value = y.toFixed(deciCnt);

        deciCnt++;
        document.getElementById("decimalVar").value = deciCnt;
    }
}
function operators(x) {

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
function operandcheck() {
    if (document.getElementById("operand").value == "") {
        document.getElementById("operand").value = document.getElementById("result").value;
        document.getElementById("equivalent").value = 1;
    }
    else {
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
            a *= 1 / b;
            break;
        default:
    }
     
    let deciCnt = getDeciPos(a);
    document.getElementById("operand").value = document.getElementById("result").value = a.toFixed(deciCnt);
    document.getElementById("equivalent").value = 1;
    document.getElementById("decimalVar").value = deciCnt;
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
    document.getElementById("recall").value = 0;
}
function plusminus() {
    let x = parseFloat(document.getElementById("result").value);

    x *= -1;

    document.getElementById("result").value = x;
}
function percent() {
    let x = parseFloat(document.getElementById("result").value);

    x *= 1 / 100;

    let deciCnt = getDeciPos(x);
    document.getElementById("result").value = x.toFixed(deciCnt);
    document.getElementById("decimalVar").value = deciCnt;
}

function square() {
    let x = parseFloat(document.getElementById("result").value);

    x *= x;

    let deciCnt = getDeciPos(x);
    document.getElementById("result").value = x.toFixed(deciCnt);
    document.getElementById("decimalVar").value = deciCnt;
}
function decimalpoint() {
    if (document.getElementById("decimalVar").value == 0) {
        document.getElementById("decimalVar").value = 1;
        document.getElementById("result").value = document.getElementById("result").value + ".";
    }
}
const getDeciPos = strg => {
    if (typeof strg == "string") {
        if (strg.includes("e")) { // exponentional value....
            return 0;
        }
    }
    else {
        strg = " " + strg; // make it a string in content by pre pending a space. (nb. the indexOf will ignore the first space )
    }

    if (strg.includes(".")) {

        return strg.length - strg.indexOf(".");

    } else {

        return 0;
    }
}
const clearIt = () => { 
    document.getElementById("result").value = 0;
    document.getElementById("decimalVal").value = 0;
}
const memory = (event) => { 
    document.getElementById("recall").value = document.getElementById("result").value;
    event.target.style.color = "green";
}
const memoryRecall = () => {
    if (document.getElementById("recall").value != 0) {
        document.getElementById("result").value = document.getElementById("recall").value;
        document.getElementById("recall").value = 0;
        document.getElementById("memory").style.color = "";
    }
}
const squareRoot = () => {

    let x = parseFloat(document.getElementById("result").value);

    x = Math.sqrt(x);

    let deciCnt = getDeciPos(x);
    document.getElementById("result").value = x.toFixed(deciCnt);
    document.getElementById("decimalVar").value = deciCnt;

}
let extraKeys = document.getElementById("calculatorButtons");
let newRow = extraKeys.insertRow(1);
let newT1 = newRow.insertCell(0);
let newT2 = newRow.insertCell(1);
let newT3 = newRow.insertCell(2);
let newT4 = newRow.insertCell(3);
let butt1 = document.createElement("input");
butt1.id = "clear";
butt1.type = "button";
butt1.value = "C";
butt1.onclick = () => clearIt();
newT1.appendChild(butt1);
let butt2 = document.createElement("input");
butt2.id = "memory";
butt2.type = "button";
butt2.value = "M";
butt2.onclick = (ev) => memory(ev);
newT2.appendChild(butt2);
let butt3 = document.createElement("input");
butt3.id = "memoryRecall";
butt3.type = "button";
butt3.value = "MR";
butt3.onclick = () => memoryRecall();
newT3.appendChild(butt3);
let butt4 = document.createElement("input");
butt4.id = "squareRoot";
butt4.type = "button";
butt4.value = "\u221A";
butt4.onclick = () => squareRoot();
newT4.appendChild(butt4);