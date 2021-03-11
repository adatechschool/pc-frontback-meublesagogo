let ipAdress = "192.168.1.31"
let url = "http://"+ipAdress+":5000/api/user/login"

submit.addEventListener('click', () => {

  // Default options are marked with *
  const response = fetch("http://192.168.1.31:5000/api/user/login", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   body: JSON.stringify({
   email: $("#email").val(),
   password: $("#password").val()}) // body data type must match "Content-Type" header
 }
).then((response) => {
    return response.json();

  }).then((data) => {
    console.log(data.token)
    console.log(data.userId)
    document.cookie = "username="+data.username+";path=/ ; max-age=3600";
    document.cookie ="userId="+data.userId+";path=/ ; max-age=3600";
    document.cookie ="token="+data.token+";path=/ ; max-age=3600";
    window.location.replace("./listeMeubles.html")
  })
  //  const token = response.json().token // parses JSON response into native JavaScript objects

})

document.getElementById("logout").addEventListener('click', () => {
  document.cookie = "username=";
  document.cookie ="userId=";
  document.cookie ="token=";
  window.location.replace("./listeMeubles.html")
})
