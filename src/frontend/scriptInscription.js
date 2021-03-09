let ipAdress = "192.168.1.31."

$(document).ready(() => {

  $("#submit").click(function(){
    if ($("#gridCheck").val() == true){
    $.ajax({
    // The URL for the request
      url: "http://"+ipAdress+":5000/api/user/signup",

    // Whether this is a POST or GET request
      type: "POST",

    // The type of data we expect back
      dataType: "json",
      data: "name="+$("#name").val()+"&email="+$("#email").val()+"&password="+$("#password").val()

    })
  }
  })
})
