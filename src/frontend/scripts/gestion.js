
let ipAdress = "192.168.7.115"
let url = "http://"+ipAdress+":5000/api/product/idVendor/:idVendor"
let idVendor_cookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('userId='))
  .split('=')[1];

  let vendor_token =  document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    .split('=')[1];


const supprimerMeuble = id => {
  const supp = fetch("http://192.168.7.115:5000/api/product/id/"+id, {
      method: 'DELETE', // GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+vendor_token
      }

  }).then(response => {
    console.log(response.json())
  })
}

const response = fetch("http://192.168.7.115:5000/api/product/idVendor/"+idVendor_cookie, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },

}).then((response) => {
    return response.json()

  }).then(data => {
    console.log(data)
    data.forEach( function(element){
      let card = `<div id="card" class="col text-dark">
        <div class="card mb-4 mx-auto" >
          <div class="row g-0">
            <div class="col-sm-4">
              <img src="${element.img}" class="card-img-top" alt="...">
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.category}</p>
                <p class="card-text">${element.price} €</p>
                <p class="card-text">${element.material} </p>
                <p class="card-text">${element.size.length} cm de longueur, ${element.size.height} cm de hauteur, ${element.size.depth} cm de profondeur</p>
                <p class="card-text">${element.color} </p>
                <a href="modifierMeuble.html?id=${element._id}" class="btn btn-secondary">Modifier</a>
                <button type="button" onclick="supprimerMeuble('${element._id}');" class="btn btn-danger">Supprimer</button>

              </div>
            </div>
          </div>
        </div>
      </div></a>`

        $(card).appendTo($("#card-container"));
    })
    })


  //  const token = response.json().token // parses JSON response into native JavaScript objects
