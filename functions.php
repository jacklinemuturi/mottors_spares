<?php

require_once "conn.php";

function sendmessage($phonenumber,$message)
{
    $x_username           = "jacqueline";
    $x_apikey             = "ami_K6cAnGWpXaNeZW7m71hWuRZY5xh1HgXSUBuu7Q7yX6TLG";

    // id of contact to delete
    $params = array(
        "phoneNumbers"=> $phonenumber, // phone numbers comma separated
        "message"     => $message,
        "senderId"    =>     "", // leave blank if you do not have a custom sender Id
    );

    $data = json_encode($params);

    // endoint
    $sendMessageURL     = "https://api.amisend.com/v1/sms/send";

    $req                = curl_init($sendMessageURL);

    curl_setopt($req, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($req, CURLOPT_TIMEOUT, 60);
    curl_setopt($req, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($req, CURLOPT_POSTFIELDS, $data);
    curl_setopt($req, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'x-api-user: '.$x_username,
        'x-api-key: '.$x_apikey
    ));

    // read api response
    $res              = curl_exec($req);

    // close curl
    curl_close($req);

    $i = json_decode($res);
    return $i->status;
}

function returnvalue($table,$column,$field,$value)
{
    global $conn;

    $sql = "SELECT `".$column."` FROM `".$table."` WHERE `".$field."` ='".$value."'";

    $results =mysqli_query($conn,$sql);
    if($results)
    {
        if(mysqli_num_rows($results) > 0)
        {
            $rows = mysqli_fetch_arrays($results);

                return $rows[$column];
        }else{
            return false;   
        }
    }else{
        return mysqli_error($conn);
    }
}
