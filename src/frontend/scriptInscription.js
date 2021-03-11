let ipAdress = "192.168.1.89"

$(document).ready(() => {

  $("#submit").click(function(){
    // if ($("#gridCheck").val() == true){
    $.post(
    // The URL for the request
       "http://"+ipAdress+":5000/api/user/signup",
       {name:$("#name").val(),email:$("#email").val(),password:$("#password").val()},
       ()=>{console.log("coucou")}

  )
  //}
  })
})
