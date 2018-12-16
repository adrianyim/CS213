var i, n, p, result, aprReg, termReg, amountReg, valid;

function welcome(){
    alert("Welcome to Mortgage Calculator Web page!!");
}

function getFocus(){
    document.getElementById("apr").focus();
    document.getElementById("payment").innerHTML = " ";
}

function calculation(){
    valid = validation();

    if (valid == true){
        n = n * 12;
        i = i / 100 / 12;
        
        result = p * i * ( Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        result = result.toFixed(2);
     
        document.getElementById("payment").innerHTML = "$" + result;
    }
}

function validation(){
    i = document.getElementById("apr").value;
    n = document.getElementById("term").value;
    p = document.getElementById("amount").value;

    aprReg, termReg, amountReg = /^[+]?([.]\d+|\d+([.]\d+)?)$/;

    var test = /^[-]?(\D+)?$/;
    
    if (i.match(test) || i == 0 || i == " "){
        document.getElementById("payment").innerHTML = "APR failed!";
        document.getElementById("apr").focus();
        return false;
    }
    
    if (n == " "){
        document.getElementById("payment").innerHTML = "Term failed!";
        document.getElementById("term").focus();
        return false;
    }
        
    if (p.match(test) || p == 0 || p == " "){
        document.getElementById("payment").innerHTML = "Amount failed!";
        document.getElementById("amount").focus();
        return false;
    }
    return true;
}