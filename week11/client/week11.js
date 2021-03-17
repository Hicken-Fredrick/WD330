import {makeRequest} from './authHelpers.js'
import Auth from './auth.js'

const authUser = new Auth;

//window.displayRadius = displayRadius;
window.addEventListener('load', () => {
   document.getElementById('formSubmit').addEventListener('click', login);
   getUserList()
 });

function login() {
   authUser.login(getPosts);
}

async function getUserList() {
   try {
      await authUser.loginWithDetails('user1@email.com', 'user1')
      const data = await makeRequest('users', 'GET', null, authUser.token);

      var ul = document.getElementById('userList');
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
       var li = document.createElement('li');
       let p = document.createElement('p');
       li.innerText = data[i].email;
       p.innerText = data[i].password;
       li.appendChild(p);
       ul.appendChild(li);
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error)
    }
}

async function getPosts() {
   try {
     const data = await makeRequest('posts', 'GET', null, authUser.token);
     // make sure the element is shown
     document.getElementById('content').classList.remove('hidden');
     var ul = document.getElementById('list');
     ul.innerHTML = '';
     for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      let p = document.createElement('p');
      li.innerText = data[i].title;
      p.innerText = data[i].content;
      li.appendChild(p);
      ul.appendChild(li);
     }
   } catch (error) {
     // if there were any errors display them
     console.log(error)
   }
 }