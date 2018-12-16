<!DOCTYPE html>
<html lang="en">
   <head>
   <title>Mortgage Calculator Results</title>
   <meta charset="utf-8"/>
   <meta name="viewport" content="eidth=device-with, initial-scale=1">
   <link rel="stylesheet" type="text/css" href="assign04.css">
   <?php
   $i = $_GET ["apr"];
   $n = $_GET ["term"];
   $p = $_GET ["amount"];

   if($i == "") {
      $i = 0;
   }
   if($n == "") {
      $n = 0;     
   }
   if($p == "") {
      $p = 0;
   }

   function calculation($i, $n, $p) {
      $n = $n * 12;
      $i = $i / 100 / 12;
      $result = $p * $i * (pow(1 + $i, $n)) / (pow(1 + $i, $n) - 1);
      return $result;
   }

   $monthly = calculation($i, $n, $p);
   $monthly = number_format($monthly, 2, '.', '');
   ?>
   </head>
   <body>
   <header>
      <p class="top">Mortgage Calculator Results Page</p>
   </header>
   <div>
      <?php
      echo "Annual Percentage Rate (APR): $i<br/>";
      echo "Loan Term (in years): $n<br/>";
      echo "Loan Amount (in dollars): $ $p<br><br>";
      ?>   
   </div>
   <div>
      <?php
      echo "Monthly Payment: $ $monthly";
      ?> 
      </div>
      <div class="back">
         <a href="mortgage.html">Back to Mortgage Calculator</a>
      </div>
   </body>
</html>
