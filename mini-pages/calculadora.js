let num = document.getElementById("num");
let total = document.getElementById("total");
let op1, op2;

document.getElementById("1").addEventListener("click", () => {
    num.value+="1";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("2").addEventListener("click", () => {
    num.value+="2";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("3").addEventListener("click", () => {
    num.value+="3";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("4").addEventListener("click", () => {
    num.value+="4";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("5").addEventListener("click", () => {
    num.value+="5";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("6").addEventListener("click", () => {
    num.value+="6";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});

document.getElementById("7").addEventListener("click", () => {
    num.value+="7";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("8").addEventListener("click", () => {
    num.value+="8";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("9").addEventListener("click", () => {
    num.value+="9";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("0").addEventListener("click", () => {
    num.value+="0";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});


document.getElementById("+").addEventListener("click", () => {
    num.value+="+";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("-").addEventListener("click", () => {
    num.value+="-";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("*").addEventListener("click", () => {
    num.value+="*";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("/").addEventListener("click", () => {
    num.value+="/";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});
document.getElementById("=").addEventListener("click", () => {
    num.value+="=";
    swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
});



num.addEventListener("keyup", () => {
    if (num.value=="" && total.value!=""){
        op1=num.value;
        num.value="";
    }else{
        swInput (num.value.substring(0,num.value.length-1),num.value.charAt(num.value.length-1));
    }
    
});

function swInput (val,op){
    switch (op){
            case '+':
                op2=op1;
                op1 = op;
                num.value="";
                opera (parseFloat(val), op2);
            break;
            case '-':
            op2=op1;
                op1 = op;
                num.value="";
                opera (parseFloat(val), op2);
            break;
            case '*':
            op2=op1;
                op1 = op;
                num.value="";
                opera (parseFloat(val), op2);
            break;
            case '/':
            op2=op1;
                op1 = op;
                num.value="";
                opera (parseFloat(val), op2);
            break;
            case '=':
                opera (parseFloat(val),op1);
                num.value="";
            break;
        }
}

function opera (b, op){
    if (total.value!=""){
        switch (op){
            case '+':
                total.value=parseFloat(total.value) + b;
            break;
            case '-':
                total.value=parseFloat(total.value) - b;
            break;
            case '*':
                total.value=parseFloat(total.value) * b;
            break;
            case '/':
                total.value=parseFloat(total.value) / b;
            break;
    }
    }else{
        total.value=b;
    }
}