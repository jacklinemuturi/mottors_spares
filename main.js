$(document).ready(function(){
  $("#login").click(function()
    { 
        // ajax post
        $.post("login_session.php",
        // ajax data
        {
            login_username :$('#login_username').val(),
            login_password :$('#login_password').val()

        },
        // ajax callback
        function(response)
        {
            if(response == "success")
            {
                window.location.href = "index.php";
            }else{
                $('#loginresponse').html(response); 
            }
        });
    });
   // signup
    $("#signup").click(function()
    { 
        // ajax post
        $.post("signup_insert.php",
        // ajax data
        {
            oname       :$('#oname').val(),
            bname       :$('#bname').val(),
            users       :$('#users').val(),
            phone       :$('#phone').val(),
            password    :$('#password').val(),
            confirm     :$('#confirm').val(),

        },
        // ajax callback
        function(response)
        {
            if(response == "successful")
            {
                window.location.href = "activation.php";
            }else{
                $('#signupresponse').html(response); 
            }
        });
    });
    // activation
    $("#activation").click(function(event){ 
        // ajax post
        $.post("activation_code.php",
        // ajax data
        {
            activation_code :$('#activation_code').val(),
        },
        // ajax callback
        function(response)
        {
            if(response == "successfull")
            {
                // location.reload();
                window.location.href = "index.php";
            }else{
                $('#activationresponse').html(response);
            }
        });
    });
    
});