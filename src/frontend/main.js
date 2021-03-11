let username_span = document.getElementById('username');

let cookie_userId =  document.cookie
  .split('; ')
  .find(row => row.startsWith('userId='))
  .split('=')[1];

let cookie_token =  document.cookie
  .split('; ')
  .find(row => row.startsWith('token='))
  .split('=')[1];

let cookie_user =  document.cookie
  .split('; ')
  .find(row => row.startsWith('username='))
  .split('=')[1];
username_span.innerHTML = cookie_user;

if (window.location.pathname === "/espaceperso.html"){
  document.getElementById("logout").addEventListener('click', () => {
  document.cookie = "username=";
  document.cookie ="userId=";
  document.cookie ="token=";
  window.location.replace("./listeMeubles.html")
})
}
function logIn(cookie_token){
  if (cookie_token.length < 5){
    window.location.replace("./connexion.html")
  }
}

logIn(cookie_token);
