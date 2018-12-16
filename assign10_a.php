<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Order</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-with, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="assign10.css">
  </head>
  <body>
    <br><br>
  <?php
    if (isset($_GET['confirm'])) {
      echo "The order has been confirmed!";
    }
    else if (isset($_GET['cancel'])) {
      echo "The order has been cancelled!";
    }
  ?>
    <br><br><br>
    <a href="assign10.html">Purchase Again</a><br><br><br>
    <footer>
      <img src="Panda_Express.png" alt="panda express logo">
    </footer>
  </body>
</html>
