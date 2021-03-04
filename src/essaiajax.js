$(document).ready(() => {
  $.ajax({

    // The URL for the request
    url: "http://192.168.7.115:5000/api/product/id/603e027c307535a76ae0c769",

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType: "json",
  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(response => {

      $("h5").append(response.name);
      $("#type").append(response.category);
      $("#material").append(response.material);
      $("#color").append(response.color);
      $("#price").append(response.price + "€");
      $("#firstimage").append(response.img);
      $("#secondimage").append(response.img);
      $("#thirdimage").append(response.img);




    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail((xhr, status, errorThrown) => {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })
    // Code to run regardless of success or failure;
    .always((xhr, status) => {
      alert("The request is complete!");
    });
});