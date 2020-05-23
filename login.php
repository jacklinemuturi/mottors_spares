<!DOCTYPE html>
<html lang="en">  
    <!-- Mirrored from byrushan.com/projects/material-admin/app/2.6/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 28 Mar 2020 08:23:28 GMT -->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Vendor styles -->
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/css/mdb.min.css" rel="stylesheet">
        <link rel="stylesheet" href="vendors/material-design-iconic-font/css/material-design-iconic-font.min.css">
        <!-- <link rel="stylesheet" href="vendors/animate.css/animate.min.css"> -->

        <!-- App styles -->
        <link rel="stylesheet" href="css/app.min.css">
    </head>

    <body data-ma-theme="green">
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                    <div class="col-5">
                                <!-- Card -->
                        <div class="card animated fadeInLeft" style="margin-top:100px;">
                                <h5 class="sign" style="margin-left:200px;margin-top:50px;font-size:20px;color:skyblue;">signIn</h5>
                                <!-- Card body -->
                            <div class="card-body">
                                <p id="loginresponse" class="h5 text-center text-danger py-4" style="color:#32c787;"></p>
                                <!-- Material input email -->
                                <div class="md-form">
                                    <input type="text" id="login_username" class="form-control" placeholder="Enter Username">
                                </div>                    
                                <!-- Material input password -->
                                <div class="md-form">
                                    <input type="password" id="login_password" class="form-control" placeholder="Your password">
                                </div>
                                <div class="text-center py-4 mt-3">
                                    <button style="background-color:#32c787;color:white;border-radius:20px;" id="login" type="button" class="btn btn-primary">LogIn</button>
                                </div>
                                <a style="font-size:15px;" href="forgot_username.php">Forgot password?</a>
                            </div>
                        </div>
                        <p style="font-size:15px;">Do not have an account?<a style="font-size:15px;" href="signup.php">SignUp</a></p>
                    </div>
                    <div class="col-3"></div>
            </div>
        </div>
        <script src="jquery.js"></script>
        <script src="main.js"></script> 
    </body>
</html>

