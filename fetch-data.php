<?php

$link = mysqli_connect("localhost","root","")  or die("failed to connect to server !!");
mysqli_select_db($link,"main2");

$query="SELECT * from main2 order by ID desc limit 1";
$result=mysqli_query($link,$query);
$row=mysqli_fetch_array($result);

$output= $row["ERPM"].",".$row["RRPM"].",".$row["PITVAL"].",".$row["FAILVAL"].",".$row["NORVAL"].",".$row["LAPCOUNT"].",".$row["OLEVEL"].",".$row["FLEVEL"].",".$row["FLSUS"].",".$row["FRSUS"].",".$row["RLSUS"].",".$row["RRSUS"].",".$row["STEER"].",".$row["MAP_LAT"].",".$row["MAP_LONG"];

echo $output;

?>