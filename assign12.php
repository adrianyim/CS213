<?php
session_cache_limiter('nocache');
session_start();
$type = $_GET['type'];
$first = $_GET['first'];
$last = $_GET['last'];
$id = $_GET['studentId'];
$level = $_GET['level'];
$instrument = $_GET['instrument'];
$location = $_GET['location'];
$room = $_GET['room'];
$time = $_GET['time'];
$first2 = $_GET['first2'];
$last2 = $_GET['last2'];
$id2 = $_GET['studentId2'];

$content = $type + "&nbsp" + $first + "&nbsp" + $last + "&nbsp" + $id + "&nbsp" + $level + "&nbsp" + $instrument + "&nbsp" + $location + "&nbsp" + $room + "&nbsp" + $time + "&nbsp" + $first2 + "&nbsp" + $last2 + "&nbsp" + $id2;
$file = fopen('data.txt', 'w');
fwrite($file, $content);
fclose($file);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-with, initial-scale=1">
  </head>
  <body>
    <?php
    echo "assign12.php is working!";
    // echo "Type : $type<br/>";
    // echo "First Name : $first<br/>";
    // echo "Last Name : $last<br/>";
    // echo "ID : $id<br/>";
    // echo "Level : $level<br/>";
    // echo "Instrument : $instrument<br/>";
    // echo "Location : $location<br/>";
    // echo "Room : $room<br/>";
    // echo "Time : $time<br/>";
    // echo "First Name2 : $first2<br/>";
    // echo "Last Name2 : $last2<br/>";
    // echo "ID2 : $id2";
    ?>
  </body> 
</html>