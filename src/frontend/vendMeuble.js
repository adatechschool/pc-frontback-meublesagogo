let ipAdress = "192.168.1.31"
// Using the core $.ajax() method
$(document).ready(function () {
    $.ajax({

      // The URL for the request
      url: "http://"+ipAdress+":5000/api/product/sample",

      // Whether this is a POST or GET request
      type: "POST",

      // The type of data we expect back
      dataType: "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function

      .done(function(response){
        response.forEach( function(element){

        })
      })
      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      .fail(function (xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
      })
      // Code to run regardless of success or failure;
      .always(function (xhr, status) {
        console.log("The request is complete!");
      });
  });
