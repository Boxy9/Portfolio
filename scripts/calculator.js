const equivalentCheck = () => {
    if (parseInt(document.getElementById("equivalent").value)) {
        document.getElementById("equivalent").value = 0;
        document.getElementById("result").value = 0;
    }
}
const input = x => {
    equivalentCheck();
    let y = document.getElementById("result").value;
    let xB = new bigDecimal(x);
    let yB = new bigDecimal(y);
    const ten = new bigDecimal("10");

    if (document.getElementById("decimalVar").value == 0) {
        let yBten = yB.multiply(ten);
        let sum = xB.add(yBten);
        document.getElementById("result").value = sum.getValue();
    }
    else {
        let deciCnt = parseInt(document.getElementById("decimalVar").value);
        let Bpow = 10 ** deciCnt;
        let xBpow = new bigDecimal(Bpow);
        let xBdiv = xB.divide(xBpow);
        let sum = yB.add(xBdiv);
        document.getElementById("result").value = getDeciPos(sum.getValue());

        deciCnt++; //for next digit !!
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
    let aB = new bigDecimal(a);
    let bB = new bigDecimal(b);
    let result = new bigDecimal(0);
    switch (parseInt(document.getElementById("operation").value)) {
        case 1: //add
            result = aB.add(bB);
            break;
        case 2: //subtract
            result = aB.subtract(bB);
            break;
        case 3: //multiply
            result = aB.multiply(bB);
            break;
        case 4: // divide
            result = aB.divide(bB);
            break;
        default:
    }

    document.getElementById("operand").value = document.getElementById("result").value = getDeciPos(result.getValue());
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
    document.getElementById("recall").value = 0;
    document.getElementById("memory").style.color = "";
}
function plusminus() {
    let x = parseFloat(document.getElementById("result").value);
    let xB = new bigDecimal(x);
    let xBN = xB.negate();
    document.getElementById("result").value = xBN.getValue();
}
function percent() {
    let x = parseFloat(document.getElementById("result").value);
    let xB = new bigDecimal(x);
    let hundredB = new bigDecimal("100");
    let result = xB.divide(hundredB);
    document.getElementById("result").value = getDeciPos(result.getValue());
}

function square() {
    let x = parseFloat(document.getElementById("result").value);
    let xB = new bigDecimal(x);
    let result = xB.multiply(xB);
    document.getElementById("result").value = getDeciPos(result.getValue());
}
function decimalpoint() {
    if (document.getElementById("decimalVar").value == 0) {
        document.getElementById("decimalVar").value = 1;
        document.getElementById("result").value = document.getElementById("result").value + ".";
    }
}
const getDeciPos = strg => { // gets the number of decimal places and return the formatted string.
    if (typeof strg != "string") {
        strg = " " + strg; // make it a string in content by pre appending a space. 
    }

    if (strg.includes("e")) { // exponentional value....
        return strg;
    }

    if (strg.includes(".")) {
        strg = strg.trim();
        let newStrg = [""];
        let j = strg.length - 1;
        let removedZeros = false; // we only want to remove trailing zeroes. 
        for (let i = j; i >= 0; i--) {

            if (strg[i] != "0" || removedZeros) {

                newStrg[i] = strg[i];
                removedZeros = true; // first digit add the rest.   
            }
        }

        let deciCnt = newStrg.length - newStrg.indexOf(".") - 1;
        if (deciCnt > 9) {
            deciCnt = 9;
        }
        strg = newStrg.join("");
        let strgB = new bigDecimal(strg);
        let strgBR = strgB.round(deciCnt);
        deciCnt++; // for next digit - ten decimal places max - ok !!
        document.getElementById("decimalVar").value = deciCnt;
        return (strgBR.getValue());

    } else {

        return strg;
    }
}
const clearIt = () => {
    document.getElementById("result").value = 0;
    document.getElementById("decimalVal").value = 0;
}
const memory = (ev) => {
    document.getElementById("recall").value = document.getElementById("result").value;
    ev.target.style.color = "green";
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

    document.getElementById("result").value = getDeciPos(x);

}

// dynamically add a row of buttons in the buttons table 
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
butt1.addEventListener("click", clearIt);
// the same as "butt1.onclick = () => clearIT();" 
// nb. event listeners alway pass the event and tag of the element to the function (I think).
newT1.appendChild(butt1);
let butt2 = document.createElement("input");
butt2.id = "memory";
butt2.type = "button";
butt2.value = "M";
butt2.addEventListener("click", memory);
newT2.appendChild(butt2);
let butt3 = document.createElement("input");
butt3.id = "memoryRecall";
butt3.type = "button";
butt3.value = "MR";
butt3.addEventListener("click", memoryRecall);
newT3.appendChild(butt3);
let butt4 = document.createElement("input");
butt4.id = "squareRoot";
butt4.type = "button";
butt4.value = "\u221A";
butt4.addEventListener("click", squareRoot);
newT4.appendChild(butt4);

let addText = () => {
    if (document.getElementById("ftNote")) {
        let ftNote = document.getElementById("ftNote");
        ftNote.remove();      
        document.getElementById("addText").innerHTML = "Click Me";
    }
    else {
        let ftNote = document.createElement("p");
        let insPt = document.getElementById("main");
        ftNote.innerHTML = "The first row of the calculator buttons (the row starting with the 'C' button) have been added dynamically. JavaScript event listeners, functions and code to make the buttons and the calculator work when the buttons are pressed."
        ftNote.style.color = "blue";
        ftNote.style.textAlign = "center";
        ftNote.style.fontSize = "1.5em";
        ftNote.id = "ftNote";
        insPt.appendChild(ftNote);
        document.getElementById("addText").innerHTML = "Remove";
    }
}
document.getElementById("addText").addEventListener("click", addText);