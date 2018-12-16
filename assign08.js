var request;

function getRequest(url) {
  request = false;
  request = new XMLHttpRequest();
  if (!request) {
    alert('ERROR: Browser does not support XML-HTTP');
    return false;
  }
  else {
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {                
        if (url == "usa.txt" || url == "mexico.txt" || url == "canada.txt" || url == "russia.txt") {
          ajaxRequest(this.responseText);
        }
        
        if (url == "json.txt" || url == "json1.txt") {
          jsonRequest(this.responseText);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  }
};

function ajaxRequest(responseText) {
    var ajax = responseText.split(/\s{2,25}|\n/);
    var disText = "<table><tr><th>City:</th><th>Population:</th></tr>";
    for (i = 0; i < ajax.length - 1; i++) {
      disText += "<tr><td>" + ajax[i] + "</td><td>" + ajax[i + 1] + "</td></tr>";
      i++;
    }
    
    disText += "</table>";
    document.getElementById('ajax').innerHTML = disText;
};
                
function jsonRequest(responseText) {                 
  var json = JSON.parse(responseText);
  var disTable = "<table><tr><th>Name:</th><th>Address:</th><th>Major:</th><th>GPA:</th></tr>";
  for (var i = 0; i < json.students.length; i++) {
    disTable = disTable + "<tr><td>" + json.students[i].first + " " + json.students[i].last + "</td><td>" + json.students[i].address.city + ", " + json.students[i].address.state + ", " + json.students[i].address.zip + "</td><td>" + json.students[i].major + "</td><td>" + json.students[i].gpa + "</td></tr>";
  }

  disTable += "</table>";
  document.getElementById('json').innerHTML = disTable;
};