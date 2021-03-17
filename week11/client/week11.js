import Auth from './auth.js'

const authUser = new Auth;

//window.displayRadius = displayRadius;
window.addEventListener('load', () => {
   document.getElementById('formSubmit').addEventListener('click', login);
 });

function login() {
   authUser.login();
}