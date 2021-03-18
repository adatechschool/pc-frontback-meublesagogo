
// Using the core $.ajax() method
let token = ""
let ipAdress = "localhost"

$(document).ready(function () {
  $.ajax({

    // The URL for the request
    url: "http://"+ipAdress+":5000/api/product/sample",

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType: "json",

    // TODO : set header with the right authorization token
  //headers: {"Authorization" : `Bearer ${token}`}

  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function(response){
      console.log(response)
      response.forEach( function(element){
        let card = `<a href="meubledetail.html?id=${element._id}" style = "text-decoration : none;"><div id="card" class="col text-dark">
          <div class="card mb-4 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${element.img}" class="card-img-top" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.category}</p>
                  <p class="card-text">${element.price} €</p>
                  <button type="button" class="btn btn-secondary">Acheter</button>
                </div>
              </div>
            </div>
          </div>
        </div></a>`

          $(card).appendTo($("#card-container"));
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
