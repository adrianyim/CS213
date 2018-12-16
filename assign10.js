function getFocus()
{
    document.getElementById("first").focus();
    document.getElementById("phoneCK").innerHTML = "";
    document.getElementById("creditNumCK").innerHTML = "";
}

function totalPrice() {
    var input = document.getElementsByClassName("item");
    var total = 0;
    
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked)
        {
                total += parseFloat(input[i].value);
            }
    }
    total = total.toFixed(2);
    document.getElementById("total").value = "$" + total;
}

function firstCheck()
{
    var format = /[A-z]/g;
    var input = document.getElementById("first").value;
    if(input.match(format))
    {
        document.getElementById("firstCK").innerHTML = "Valid";
        return true;
    }
    else
    {
        document.getElementById("firstCK").innerHTML = "Please enter correct first name!!";
        return false;
    }
}

function firstCheck()
{
    var format = /[A-z]/g;
    var input = document.getElementById("first").value;
    if(input.match(format))
    {
        document.getElementById("firstCK").innerHTML = "Valid";
        return true;
    }
    else
    {
        document.getElementById("firstCK").innerHTML = "Please enter correct first name!!";
        return false;
    }
}       

function lastCheck()
{
    var format = /[A-z]/g;
    var input = document.getElementById("last").value;
    if(input.match(format))
    {
        document.getElementById("lastCK").innerHTML = "Valid";
        return true;
    }
    else
    {
        document.getElementById("lastCK").innerHTML = "Please enter correct last name!!";
        return false;
    }
}

function phoneCheck()
{
    var format = /^\d{3}-\d{3}-\d{4}$/;
    var input = document.getElementById("phone").value;
    if(input.match(format))  
    {     
        document.getElementById("phoneCK").innerHTML = "Valid";
        return true;
    }   
    else  
    {     
        document.getElementById("phoneCK").innerHTML = "Please enter correct format! e.g. 123-456-7890";  
        return false;  
    }  
}

function creditNumCheck()
{
    var format = /^\d{16}$/;
    var num = document.getElementById("cardNum").value;
    if(num.match(format))
    {
        document.getElementById("creditNumCK").innerHTML = "Valid";
        
        return true;
    }
    else
    {
        document.getElementById("creditNumCK").innerHTML = "Please enter correct 16 digits!!";
        return false;
    }
}

function validation()
{
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var num = document.getElementById("cardNum").value;
    var nameReg = /[A-z]/g;
    var phoneReg = /^\d{3}-\d{3}-\d{4}$/;
    var creditReg = /^\d{16}$/;
    
    if(first.match(nameReg))
    {
        if(last.match(nameReg))
        {
            if(phone.match(phoneReg))
            {
                if(document.getElementById("itemA").checked || document.getElementById("itemB").checked
                   || document.getElementById("itemC").checked || document.getElementById("itemD").checked
                   || document.getElementById("itemE").checked || document.getElementById("itemF").checked)
                {
                    if(num.match(creditReg))
                    {
                        return true;
                    }
                    else
                    {
                        document.getElementById("creditNum").focus();
                        document.getElementById("creditNumCK").innerHTML = "Invalid";
                        return false;
                    }
                }
                else
                {
                    document.getElementById("priceCK").innerHTML = "Please select one of these options!";
                    return false;
                }
            }
            else
            {
                document.getElementById("phone").focus();
                document.getElementById("phoneCK").innerHTML = "Invalid";
                return false;
            }
        }
        else
             {
                 document.getElementById("last").focus();
                 document.getElementById("lastCK").innerHTML = "Invalid";
                 return false;
             }
    }
    else
    {
        document.getElementById("first").focus();
        document.getElementById("firstCK").innerHTML = "Invalid";
        return false;
    }
}
