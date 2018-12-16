window.onload = function() {
    getRequest();
}

function getRequest() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('dir').innerHTML = "You are in the httpRequest function";
            ajaxRequest(this.responseText);
        }
    }

    httpRequest.open("GET","assign09.php",true);
    httpRequest.send();
}

function ajaxRequest(responseText) {    
    document.getElementById('dir').innerHTML = "You are in the ajax request function";
    var myObj = JSON.parse(responseText);
    document.getElementById('dir').innerHTML = myObj.length;
    // var text = "<table id=\"t01\"> <tr> <th>Filename</th> <th>Type</th> <th>CWD</th> <th>Action</th> </tr> ";
    // for (var k = 0; k < myObj.length; k++) {
    //     var filename = myObj[k].fileName;
    //     var filetype = myObj[k].fileType;
    //     var cwd = myObj[k].cwd;
    //     text +=  "<tr> <td>" + filename + "</td> <td>" + filetype + "</td> <td>" + cwd + "</td>"; 
    //     if (filetype == "file")
    //     text += "<td> <button type=\"button\" onclick=\"window.open('" + filename + "','_blank')\">Display</button>" + "</td>";
    //     else 
    //     text += "<td></td>";
    //     text += "</tr>";
    // }
    // text += "</table>";
    // document.getElementById("dir").innerHTML = text;
}