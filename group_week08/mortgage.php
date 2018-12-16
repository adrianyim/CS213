<?php
$apr = $_GET['interest'];
$term = $_GET['term'];
$payment = $_GET['payment'];

if($apr == "") {
     $apr = 0;
}
if($term == "") {
     $term = 0;    
}
if($payment == "") {
     $payment = 0;
}

function monthly($apr, $term, $payment) {
      $term = $term * 12;
      $apr = $apr / 100 / 12;
      $monthly = $payment * $apr * (pow(1 + $apr, $term)) / (pow(1 + $apr, $term) - 1);
      return $monthly;
}
      $monthly = monthly($apr, $term, $payment);
      $monthly = number_format($monthly, 2, '.', '')
?>

<!DOCTYPE html>
<html lang="en">
      <head>
      <title>Mortgage Calculator PHP</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="eidth=device-with, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="assign04.css">
      </head>
      <body>
        <header>
           <p class="top">Welcome to Mortgage Calculator Page!!</p>
        </header>
        <div class="mortgage">
        <?php
           echo "Annual Percentage Rate (APR): $apr<br/>";
           echo "Loan Term (in years): $term<br/>";
           echo "Loan Amount (in dollars): $ $payment<br><br>";
           ?>   
           </div>
        <div class="month">
        <?php
           echo "Monthly Payment: $ $monthly";
        ?> 
        </div>
        <div class="back">
           <a href="mortgage.html">Back to Mortgage Calculator</a>
        </div>
      </body>
</html>
