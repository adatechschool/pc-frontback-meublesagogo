// Using the core $.ajax() method
$(document).ready(function () {
    $.ajax({
  
      // The URL for the request
      url: "http://192.168.7.115:5000/api/product/sample",
  
      // The data to send (will be converted to a query string)
  
      // Whether this is a POST or GET request
      type: "POST",
  
      // The type of data we expect back
      dataType: "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function
      //.done(function (json) {
      //  $("<h5>").text(json.name).appendTo("body");
      .done(function(response){
        response.forEach( function(element){
        
        }
  
  
        )
         // let name = response[0].name;
          //console.log(data);
          //$("h5").append(data);
          //let c2 = $("#card").clone();
  
        //On place cette copie dans le document (en fin de l'élément body)
          //c2.appendTo("body");
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
        alert("The request is complete!");
      });
  });