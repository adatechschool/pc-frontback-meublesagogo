let ipAdress = "192.168.1.14."

$(document).ready(() => {
  //let searchParams = new URLSearchParams(window.location.search);
  //let id = "";
//  if (searchParams.has('id')) {
    //id = searchParams.get('id');
//  }

$("#submit").click(function(){
  $.ajax({
    // The URL for the request
    url: "http://"+ipAdress+":5000/api/user/signup",

    // Whether this is a POST or GET request
    type: "POST",

    // The type of data we expect back
    dataType: "json",
    data: "name="+$("#name")+"&email="+$("#email")+"&password="+$("#password")
  })
  })
  })
