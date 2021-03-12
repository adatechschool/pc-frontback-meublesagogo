let searchParams = new URLSearchParams(window.location.search);
let id = "";
if (searchParams.has('id')) {
  id = searchParams.get('id');
}

const response = fetch("http://192.168.1.31:5000/api/product/id/"+id, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },

}).then((response) => {
    return response.json()

  }).then((data)=> {
    $("#name")[0].value = data.name;
    $("#category")[0].value = data.category;
    $("#price")[0].value = data.price;
    $("#img")[0].value = data.img;
    $("#color")[0].value = data.color;
    $("#description")[0].value = data.description;
    $("#length")[0].value = data.size.length;
    $("#height")[0].value = data.size.height;
    $("#depth")[0].value = data.size.depth;
    $("#material")[0].value = data.material;
  });

  submit.addEventListener('click', () => {

const put = fetch("http://192.168.1.31:5000/api/product/id/"+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': "Bearer "+cookie_token ,
      },
     body: JSON.stringify({

       name: $("#name").val(),
       category: $("#category").val(),
       description: $("#description").val(),
       color: $("#color").val(),
       img: $("#img").val(),
       price : $("#price").val(),
       size: {
         length: $("#length").val(),
         height: $("#height").val(),
         depth: $("#depth").val()
       },
       material: $("#material").val().split(" "),
       idVendor: cookie_userId

     })
    }).then(() => {
        alert('Meuble bien modifié !')
        window.location.replace("index.html")


      });
    });
