<?php
	$link = mysqli_connect("localhost","root","")  or die("failed to connect to server !!");
	mysqli_select_db($link,"main2");
	while (1) {
		$erpm=random_int(0, 3600);
		$rrpm=random_int(0, 700);
		$pitVal=random_int(0, 1);
		$failVal=random_int(0, 1);
		$norVal=random_int(0, 1);
		$lapCount=random_int(0, 10);
		$oLevel=random_int(0, 100);
		$fLevel=random_int(0, 1);
		$flsus=random_int(0, 100);
		$frsus=random_int(0, 100);
		$rlsus=random_int(0, 100);
		$rrsus=random_int(0, 100);
		$steer=random_int(-135, 135);
		$MAP_LAT=random_int(0, 100);
		$MAP_LONG=random_int(0, 100);
		$query="INSERT INTO `main2`.`main2`(`ERPM`,`RRPM`,`PITVAL`,`FAILVAL`,`NORVAL`,`LAPCOUNT`,`OLEVEL`,`FLEVEL`,`FLSUS`,`FRSUS`,`RLSUS`,`RRSUS`,`STEER`,`MAP_LAT`,`MAP_LONG`) VALUES ('$erpm','$rrpm','$pitVal','$failVal','$norVal','$lapCount','$oLevel','$fLevel','$flsus','$frsus','$rlsus','$rrsus','$steer','$MAP_LAT','$MAP_LONG')";
		$result=mysqli_query($link,$query);
		sleep(1);
	}
?>