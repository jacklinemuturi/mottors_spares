<?php
    session_start();
     if(isset($_SESSION['mottor']))    
    {
        header("Location:index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Sign Up</title>
        <link rel="stylesheet" href="vendors/animate.css/animate.min.css">
        <!-- App styles -->
        <link rel="stylesheet" href="css/app.min.css">
    </head>

    <body data-ma-theme="green">
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <!-- Card -->
                    <div class="card animated zoomIn mt-5">
                    <!-- Card body -->
                        <div class="card-body">
                            
                                <p class="h4 text-center py-4" style="color:skyblue;">Sign up</p>

                                <p id="signupresponse" class="h5 text-center text-danger py-4" style="color:#32c787;"></p>
                                <!-- Material input text -->
                                <div class="md-form">
                                    <i class="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="oname" class="form-control" placeholder="Business owner">
                                </div><br>
                                <!-- business name -->
                                <div class="md-form">
                                    <i class="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="bname" class="form-control" placeholder="Business name">
                                </div><br>
                                <!-- username -->
                                <div class="md-form">
                                    <i class="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="users" class="form-control" placeholder="Username">
                                </div><br>
                                 <!-- Material input phonenumber -->
                                <div class="md-form">
                                    <i class="fa fa-envelope prefix grey-text"></i>
                                    <input type="text" id="phonenumber" class="form-control" placeholder="Phonenumber">
                                </div><br>
                                <!-- Material input password-->
                                <div class="md-form">
                                <i class="fa fa-lock prefix grey-text"></i>
                                    <input type="password" id="password" class="form-control" placeholder="Password">
                                </div><br>
                                <!-- Material input confirm password -->
                                <div class="md-form">
                                    <i class="fa fa-lock prefix grey-text"></i>
                                    <input type="password" id="confirm" class="form-control" placeholder="Confirm password">
                                </div><br>
                                <div class="text-center py-4 mt-3">
                                    <button class="btn btn-primary" id="signup">Register</button>
                                </div>
                          
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
        <script src="jquery.js"></script>
        <script src="main.js"></script>
    </body>
</html>