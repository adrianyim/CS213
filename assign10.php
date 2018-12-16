<?php
$first = $_GET['first'];
$last = $_GET['last'];
$address = $_GET['address'];
$phone = $_GET['phone'];
$total = $_GET['total'];
$cardType = $_GET['cardType'];
$month = $_GET['month'];
$year = $_GET['year'];
?>

<!DOCTYPE html>
<html lang="en">
      <head>
      <title>Order Cart</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="eidth=device-with, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="assign10.css">
      </head>
      <body>
        <header>
           <h1>Order Cart</h1>
        </header>
                <div class="center_1">
                    <?php
                        echo "Name: $first $last<br/>";
                        echo "Address: $address<br/>";
                        echo "Phone: $phone<br/>";
                        echo "Item:<br/>";
                        foreach ($_POST['item'] as $price) {
                          if ($price == 1.99) {
                            echo "Soda ------- $ $price<br/>";
                          }
                          else if ($price == 5.25) {
                                 echo "Chicken Tenders Combo ------- $ $price</br>";
                               }
                               else if ($price == 10.47) {
                                      echo "Grilled Chicken Sandwich ------- $ $price</br>";
                                    }
                                    else if ($price == 20.99) {
                                           echo "Korean bbq ------- $ $price<br/>";
                                         }
                                         else if ($price == 50) {
                                                echo "Healthy Meal Plan for 1 week ------- $ $price<br/>";
                                              }
                                              else if ($price == 100.99) {
                                                     echo "Panda Express for 1 month ------- $ $price<br/>";
                                                   }
                        }
                        echo "Total price: $total<br/>";
                        echo "Credit card type: $cardType<br/>";
                        echo "Credit card expiration date: $month $year<br/>";
                    ?>
                </div>
          <div class="center">
            <form id="purchased_form" action="assign10_a.php" method="get">
              <h2>Confirm Purchase?</h2>
              <input type="submit" name="confirm" value="Comfirm">
              <input type="submit" name="cancel" value="Cancel">
              <br><br><br>
              <a href="http://157.201.194.254/~adrianyim/assign10.html">Back</a>
            </form>
          </div>
          <footer>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Panda_Express.svg/1004px-Panda_Express.svg.png" alt="panda express logo" style="width:15%;heigh:auto;">
          </footer>
      </body>
</html>