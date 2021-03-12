let ipAdress = "192.168.1.31"
let url = "http://"+ipAdress+":5000/api/user/signup"

submit.addEventListener('click', async () => {
  // Default options are marked with *
  const response = await fetch("http://192.168.1.31:5000/api/user/signup", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   body: JSON.stringify({ name: $("#name").val(),
   email: $("#email").val(),
   password: $("#password").val()}) // body data type must match "Content-Type" header
  }).then(() => {

      alert('Vous êtes bien enregistré !')
      window.location.replace("./connexion.html")// JSON data parsed by `data.json()` call
    });
//  return response.json(); // parses JSON response into native JavaScript objects
})
