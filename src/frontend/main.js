let username_span = document.getElementById('username');
let cookie_user =  document.cookie
  .split('; ')
  .find(row => row.startsWith('username='))
  .split('=')[1];
username_span.innerHTML = cookie_user;
