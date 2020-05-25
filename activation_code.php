<?php
session_start();
require_once "conn.php";
require_once "functions.php";

if(isset($_REQUEST['activation_code']))
{
    $activation_code = trim(mysqli_real_escape_string($conn, $_REQUEST['activation_code']));

    if(empty($activation_code))
    {
       die("Please fill the field!");
    }
    
    $mottor     = "+254".substr($_SESSION['mottor'],-9);
    $message    = "Welcome,your account is now active.";
    $savedcode  = returnValue("users","code","phonenumber",$_SESSION['mottor']); 

        if($activation_code == $savedcode)
        {
            $sql = "UPDATE `users` FROM `pending`=`active` WHERE `phonenumber` = '{$_SESSION['mottor']}'";
        }
        if(mysqli_qery($conn,$sql))
        {
            sendmessage($mottor,$message);
            echo "successfull";
        }else{
            echo mysqli_error($conn);
        }
    }else{
        echo "Not Activated Please check Your Code";
}