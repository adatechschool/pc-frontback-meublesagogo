let ipAdress = "192.168.1.31"



$(document).ready(() => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = "";
  if (searchParams.has('id')) {
    id = searchParams.get('id');
  }
  $.ajax({
    // The URL for the request
    url: "http://192.168.1.31:5000/api/product/id/"+id,

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

})
