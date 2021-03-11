let ipAdress = "192.168.1.31"



submit.addEventListener('click', () => {

  const response = fetch("http://192.168.1.31:5000/api/product", {
    method: 'POST',
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
      console.log("coucou meuble");
      alert('Meuble bien enregistré !')
      window.location.replace("./listeMeubles.html")

    });
  });
