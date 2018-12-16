var type, first, last, studentId, level, instrument, location, room, time, first2, last2, studentId2;

function ndStudent() {
    if (document.getElementById("duet").checked == true) {
        document.getElementById("nd").style.visibility = "visible";
    }
    else {
        document.getElementById("nd").style.visibility = "hidden";
    }
}

function focus() {
    document.getElementById("display").innerHTML = "Clear!";
    document.getElementById("first").focus();
}

function register() {
    first = document.getElementById("first").value;
    last = document.getElementById("last").value;
    studentId = document.getElementById("studentId").value;
    level = document.getElementById("level").value;
    instrument = document.getElementById("instrument").value;
    var location = document.getElementById("location").value;
    room = document.getElementById("room").value;
    time = document.getElementById("time").value;
    var error = true;

    if (first == "") {
        document.getElementById("firstError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("firstError").style.visibility = "hidden";
        error = false;
    }

    if (last == "") {
        document.getElementById("lastError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("lastError").style.visibility = "hidden";
        error = false;
    }

    if (studentId == "") {
        document.getElementById("idError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("idError").style.visibility = "hidden";
        error = false;
    }

    if (level == "none") {
        document.getElementById("skillError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("skillError").style.visibility = "hidden";
        error = false;
    }

    if (instrument == "none") {
        document.getElementById("instError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("instError").style.visibility = "hidden";
        error = false;
    }

    if (location == "none") {
        document.getElementById("locaError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("locaError").style.visibility = "hidden";
        error = false;
    }

    if (room == "") {
        document.getElementById("roomError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("roomError").style.visibility = "hidden";
        error = false;
    }

    if (time == "none") {
        document.getElementById("timeError").style.visibility = "visible";
        error = true;
    }
    else {
        document.getElementById("timeError").style.visibility = "hidden";
        error = false;
    }
   
    if (!error) {
 
        getQuery();
    }
    else {
        document.getElementById("display").innerHTML = "Failed!";
        return false;
    }
}

function getQuery() {
    var query = "?type=";
    query += document.getElementsByName("type").value;
    query += "&firstName="
    query += document.getElementById("first").value;
    query += "&lastName="
    query += document.getElementById("last").value;
    query += "&id="
    query += document.getElementById("studentId").value;
    query += "&level="
    query += document.getElementById("level").value;
    query += "&instrument="
    query += document.getElementById("instrument").value;
    query += "&location="
    query += document.getElementById("location").value;
    query += "&room="
    query += document.getElementById("room").value;
    query += "&time="
    query += document.getElementById("time").value;

    if (document.getElementsByName("type").value == "duet") {
        query += "&first2=";
        query += document.getElementById("first2").value;
        query += "&last2="
        query += document.getElementById("last2").value;
        query += "&id2="
        query += document.getElementById("studentId2").value;
    }

    var url = "assign12.php" + query;
    getRequest(url);
}

function getRequest(url) {
     var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Http Request error!");
        return false;
    } 
    else {
        httpRequest.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                
                var output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Time</th></tr>";
                document.getElementById('display').innerHTML = output;
                
                for (var i = 0; i < data.length; i++) {
                    output += "<tr><td>" + data[i].type + "</td><td>" + data[i].first + "</td><td>" + data[i].last + "</td><td>" + data[i].id + "</td><td>" + data[i].level + "</td><td>" + data[i].instrument + "</td><td>" + data[i].location + "</td><td>" + data[i].time + "</td></tr>";

                    if (data[i].type == "duet") {
                        output += "<tr><td>" + data[i].type + "</td><td>" + data[i].first2 + "</td><td>" + data[i].last2 + "</td><td>" + data[i].id + "</td><td>" + data[i].level + "</td><td>" + data[i].instrument + "</td><td>" + data[i].location + "</td><td>" + data[i].time + "</td></tr>";
                    }
                }
            }
            output += "</table";
            document.getElementById('display').innerHTML = output;
        };
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
}
