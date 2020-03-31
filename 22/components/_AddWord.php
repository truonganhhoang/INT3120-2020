<?php

include 'DBConfig.php';

// Tao lien ket
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);

 // Populate name from JSON $obj array and store into $name.
$tuMoi = $obj['tuMoi'];

$nghiaRutGon = $obj['nghiaRutGon'];

$nghiaDayDu = $obj['nghiaDayDu'];

$phienAm = $obj['phienAm'];

$tuLoai = $obj['tuLoai'];
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into tu_vung (tu_moi,nghia_rg,nghia_dd, phien_am, tu_loai) values ('$tuMoi','$nghiaRutGon','$nghiaDayDu','$phienAm','$tuLoai')";
 

 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Data Inserted Successfully into MySQL Database' ;

// Converting the message into JSON format.
$json = json_encode($MSG);

// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>