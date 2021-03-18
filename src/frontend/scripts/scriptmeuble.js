let ipAdress = "localhost"

let id = "";


$(document).ready(() => {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('id')) {
    id = searchParams.get('id');
  }
  $.ajax({
    // The URL for the request
    url: "http://"+ipAdress+":5000/api/product/id/"+id,

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType: "json",
  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(response => {
      let image = response.img;
      let type = "Type de meuble : "+ response.category;
      let material = "Matières du meuble : "+ response.material;
      let color = "Couleurs du meuble : "+ response.color;
      let price = "Prix : "+ response.price + " €";
      let size = `<ul>
    <li>Longueur: ${response.size.length} cm</li>
    <li>Hauteur: ${response.size.height} cm</li>
    <li>Profondeur: ${response.size.depth} cm</li>
</ul>`

      $("#title").append(response.name);
      $("#type").append(type);
      $("#material").append(material);
      $("#color").append(color);

      $("#size").append(size);
      $("#price").append(price);

      // TODO : faire une boucle pour afficher les différentes images quand la base de données sera fournie
      $("#firstimage").attr('src',`${image}`);
      $("#secondimage").attr('src',`${image}`);
      $("#thirdimage").attr('src',`${image}`);
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
      console.log("The request is complete!");
    });
});

const btnCart = document.getElementById('addCart')

btnCart.addEventListener('click', () => {

  const response = fetch("http://"+ipAdress+":5000/api/cart/add", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': "Bearer "+cookie_token ,
    },
   body: JSON.stringify({

     idUser: cookie_userId,
     idProduct: id
   })
 }).then((response) => {
      console.log(response);
      //alert('Meuble bien enregistré !')
      window.location.replace("./panier.html")

    });
  });
