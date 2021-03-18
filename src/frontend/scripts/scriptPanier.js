let ipAdress = "192.168.7.115"

let idUser_cookie = document.cookie
.split('; ')
.find(row => row.startsWith('userId='))
.split('=')[1];

let userToken =  document.cookie
.split('; ')
.find(row => row.startsWith('token='))
.split('=')[1];

let idProducts;
let dataProducts;

const response = fetch("http://192.168.7.115:5000/api/cart/idUser/"+idUser_cookie, {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ userToken
  },

}).then((response) => {
  return response.json()

}).then((data) => {
  idProducts = data.idProduct
  console.log(idProducts)
  for (let i=0; i<idProducts.length; i++){
    const resProduct = fetch("http://192.168.7.115:5000/api/product/id/"+idProducts[i], {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
        let card = `<a href="meubledetail.html?id=${data._id}" style = "text-decoration : none;">
        <div id="card" class="text-dark">
          <div class="card mx-auto">
            <div class="row g-2">
              <div class="col-md-4">
                <img src="${data.img}" class="card-img-top" alt="..." style = "max-width : 100px">
              </div>
              <div class="col-md-6">

                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <button type="button" class="btn btn-secondary">Supprimer</button>
                </div>

              </div>
              <div class="col-md-3"
              <p class="card-text">${data.price} €</p>
              </div>
            </div>
          </div>
        </div>
      </a>`

        $(card).appendTo($("#card-container"));
      })
    }
  })
      // }}).then(idProducts => {
      //     idProducts.forEach( function(element){
      //       let card = `<a href="meubledetail.html?id=${element._id}" style = "text-decoration : none;"><div id="card" class="col text-dark">
      //         <div class="card mb-4 mx-auto" style="max-width: 540px;">
      //           <div class="row g-0">
      //             <div class="col-md-4">
      //               <img src="${element.img}" class="card-img-top" alt="...">
      //             </div>
      //             <div class="col-md-8">
      //               <div class="card-body">
      //                 <h5 class="card-title">${element.name}</h5>
      //                 <p class="card-text">${element.category}</p>
      //                 <p class="card-text">${element.price} €</p>
      //                 <button type="button" class="btn btn-secondary">Acheter</button>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div></a>`
      //
      //         $(card).appendTo($("#card-container"));
      //   })
