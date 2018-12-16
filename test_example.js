<!DOCTYPE html>
<html>
    <script>
    var today = new Date();
    var books =["Matthew", "Mark", "Luke", "John", "Acts", "Romans"];
    
    var output = books.join(",");

    document.getElementById("dis").innerHTML = output;
    </script>
    <body>
        <p id="dis"></p>
    </body>
</html>