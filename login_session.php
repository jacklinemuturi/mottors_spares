<?php

session_start();

require_once "conn.php";
require_once "functions.php";


if(isset($_REQUEST['login_username']) && isset($_REQUEST['login_password']));

$login_username    = trim(mysqli_real_escape_string($conn, $_REQUEST['login_username']));
$login_password    = trim(mysqli_real_escape_string($conn, $_REQUEST['login_password']));

if(empty($login_username) || empty($login_password))
{
   die("Please fill all fields!");
}

$encpass  = md5($login_password);

$select = mysqli_query($conn,"SELECT * FROM `users` WHERE `user_name`='$login_username' AND `password`='$encpass'");
if(mysqli_num_rows($select) > 0)
{
    $phone   = returnValue("users","phonenumber","user_name",$login_username);
    $_SESSION['mottor'] = $phone;

    echo "success";
}else{
    echo "Match Not Found".mysqli_error($conn);
}
