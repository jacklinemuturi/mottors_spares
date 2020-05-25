<?php

session_start();
require_once 'conn.php';
require_once 'functions.php';

    if(isset($_REQUEST['username']) && isset($_REQUEST['new_password']) && isset($_REQUEST['confirm_password']))
    {
        $username          = trim(mysqli_real_escape_string($conn, $_REQUEST['username']));
        $new_password      = trim(mysqli_real_escape_string($conn, $_REQUEST['new_password']));
        $confirm_password  = trim(mysqli_real_escape_string($conn, $_REQUEST['confirm_password']));

        if(empty($username) || empty($new_password) || empty($confirm_password))
        {
        die("Please fill all fields!");
        }

        if($new_password != $confirm_password)
        {
            die("New password and confirm password does not match!");
        }
        if(mysqli_num_rows(mysqli_query($conn, "SELECT * FROM `users` WHERE `user_name`='username'") < 1));
        {
            die("Sorry, Username does not exist!");
        }

        $encript = md5($new_password);

        $sql = "UPDATE `users` SET `password`='$encript' WHERE `user_name`= 'username'";

        if(mysqli_query($conn, $sql))
        { 
            echo "successful";
        }else{
            echo "failed".mysqli_error($conn);
        }
    }