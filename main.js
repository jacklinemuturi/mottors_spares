$(document).ready(function(){
  $("#login").click(function()
  { 
      // ajax post
      $.post("login_session.php",
      // ajax data
      {
          login_username :$('#login_username').val(),
          login_password :$('#login_password ').val()

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
           phonenumber :$('#phonenumber').val(),
           password    :$('#password').val(),
           confirm     :$('#confirm ').val(),


       },
       // ajax callback
       function(response)
       {
           if(response == "successful")
           {
               window.location.href = "index.php";
           }else{
               $('#signupresponse').html(response); 
           }
       });
   });
    
    
});