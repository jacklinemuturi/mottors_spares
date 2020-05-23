<?php
require_once 'conn.php';
require_once 'functions.php';

if(isset($_REQUEST['oname']) && isset($_REQUEST['bname']) && isset($_REQUEST['users'])  && isset($_REQUEST['phone']) && isset($_REQUEST['password']) && isset($_REQUEST['confirm']))
{
    $oname         = trim(mysqli_real_escape_string($conn, $_REQUEST['oname']));
    $bname         = trim(mysqli_real_escape_string($conn, $_REQUEST['bname']));
    $users         = trim(mysqli_real_escape_string($conn, $_REQUEST['users']));
    $phone         = trim(mysqli_real_escape_string($conn, $_REQUEST['phone']));
    $password      = trim(mysqli_real_escape_string($conn, $_REQUEST['password']));
    $confirm       = trim(mysqli_real_escape_string($conn, $_REQUEST['confirm']));

    if(empty($oname) || empty($bname) || empty($users) || empty($phone) || empty($password) || empty($confirm))
    {
       die("Please fill all fields!");
    }

    if (ctype_alpha(str_replace(' ', '', $oname)) === false)
    {     
        die("Your name must be in letters!");
    }

    if(strlen($users) < 6)
    {
        die("Username should be atleast 6 characters!");
    }

    if(!ctype_digit($phone))
    {
        die("Phonenumber must be a number!");
    }

    if(strlen($phone) <> 10)
    {
        die("Phonenumber should have 10 digits");
    }

    if($phone[0] !== "0")
    {
        die('Phonenumber must start with 0');
    }

    if(strlen($password) < 8)
    {
        die("Password should be atleast 8 characters");
    }
 
    if($password !== $confirm) 
    {
        die("Password and confirm password does not match!");
    }
    
    if(mysqli_num_rows(mysqli_query($conn, "SELECT FROM `users` WHERE `phonenumber`='$phone'")) > 0)
    {
        die("The phonenumber <b>".$phone."</b> is already in use!"); 
    }

    if(mysqli_num_rows(mysqli_query($conn, "SELECT FROM `users` WHERE `user_name`='$users'")) > 0)
    {
        die("The username is already in use please choose another!"); 
    }

    $status     = "pending";
    $created    = date("d/m/Y");
    $code       = rand(1000,99999);

    $hashedpassword   = md5($password);

    $editphone = "+254".substr($phone,-9);
    $message     = "Hello ".$bname.", your activation code is" .$code;

    $sql = "INSERT INTO `users`(`business_owner`,`business_name`,`user_name`,`phonenumber`,`password`,`status`,`created`,`code`)
            VALUE('$oname','$bname','$users','$phone','$hashedpassword','$status','$created','$code')";

    if(mysqli_query($conn,$sql))
    {
        sendmessage($editphone,$message);
        $_SESSION['mottor'] = $phone; 
        echo "successful";
    }else{
        echo "not inserted".mysqli_error($conn);

    }
}




