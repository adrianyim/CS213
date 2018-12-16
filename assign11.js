var startC, endC, startS, endS;

function validate() {
    startC = document.getElementById('startCity').value;
    endC = document.getElementById('endCity').value;
    startS = document.getElementById('startState').value;
    endS = document.getElementById('endState').value;

    var error = true;

    if (startC == "") {
        document.getElementById('startCityError').style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById('startCityError').style.visibility = "hidden";
        error = false;
    }

    if (startS == "" || startS.length < 2) {
        document.getElementById('startStateError').style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById('startStateError').style.visibility = "hidden";
        error = false;
    }

    if (endC == "") {
        document.getElementById('endCityError').style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById('endCityError').style.visibility = "hidden";
        error = false;
    }

    if (endS == "" || endS.length < 2) {
        document.getElementById('endStateError').style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById('endStateError').style.visibility = "hidden";
        error = false;
    }
    
    if (error === false) {
        var url = "cgi-bin/ercanbracks/mileage/mileageAjaxJSON?startCity=" + startC + "&startState=" + startS + "&endCity=" + endC + "&endState\=" + endS;
        getRequest(url);
    }
    else {
        return;
    }
}

function getRequest(url) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('ERROR!');
        return false;
    } 
    else {
        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.response);
                var distance = data.trip.miles;
                
                var output = "The distance from " + startC + ", " + startS + " to " + endC + ", " + endS + " is " + distance + " miles.";

                if (data.trip.tmode != undefined) {
                    output += "<br/><h3>Transport Type Available</h3><br/>";
                    for (var i = 0; i < data.trip.tmode.length; i++) {
                        output += [i+1] + ")" + data.trip.tmode[i] + "<br/>";
                    }
                }
                document.getElementById("demo").innerHTML = output;
            }
        };
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
}
