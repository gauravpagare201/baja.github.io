<?php
$host="localhost";
$user="root";
$password="";
$db="main2";


$conn=mysqli_connect($host,$user,$password)or die("Cannot execute");
mysqli_select_db($conn,$db);

    $query = "SELECT * FROM main2 order by ID desc limit 1";
   // $print_data = mysqli_fetch_row($sql_main_query);
   // $lat=$print_data[16];
   // $long=$print_data[17];

                //echo $lat;
                //echo $long;
                
       $result = mysqli_query($conn,$query);
       if(mysqli_num_rows($result) > 0){
           while($row = mysqli_fetch_array($result)){
               echo '<p>'.$row["RLSUS"].'</P>';
            
        
           }
       }
                

?>