<?php
$host="localhost";
$user="root";
$password="";
$db="main2";


$conn=mysqli_connect($host,$user,$password)or die("Cannot execute");
mysqli_select_db($conn,$db);

    $query = "SELECT * FROM main2 order by ID desc limit 1";
                
       $result = mysqli_query($conn,$query);
       if(mysqli_num_rows($result) > 0){
           while($row = mysqli_fetch_array($result)){
              $level = '<p>'.$row["FLEVEL"].'</P>';
             //echo $level;   
            echo "<script> var data =".json_encode($level)."</script>";
           }
          }
       else
       {
         echo "0";
       }          
      
?>
 <script> 
     document.write(data);
     var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 100;
 
        if(data==1)
        {var startAngle = 1 * Math.PI;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;
         context.strokeStyle = 'green';
        }
        else if(data==0)
        {
          var startAngle = 1 * Math.PI;
        var endAngle = 1.3 * Math.PI;
        var counterClockwise = false;
        context.strokeStyle = 'red';
        }
        else{
          var startAngle =0;
          var endAngle = 0;
          var counterClockwise = false;
          context.strokestyle = 'darkblue';
        }
        
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = 25;
        context.stroke();  </script>