import {makeRequest} from './authHelpers.js'
import Auth from './auth.js'

const authUser = new Auth;

//window.displayRadius = displayRadius;
window.addEventListener('load', () => {
   document.getElementById('formSubmit').addEventListener('click', login);
   getUserList();
   document.getElementById("addPost").addEventListener('click', (e) => {sendPost(e);});
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
      data.forEach(element => {
         var li = document.createElement('li');
         li.innerText = `${element.email}  -  ${element.password}`;
         ul.appendChild(li);
      });
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
     data.forEach(element => {
      var li = document.createElement('li');
      li.innerText = `${element.title}  -  ${element.content}`;
      if(element.userId == authUser.user.id){
         li.classList.add('usersPost'); 
      } 
      ul.appendChild(li);
     });
   } catch (error) {
     // if there were any errors display them
     console.log(error);
   }
}

async function sendPost(e) {
   const titleData = document.getElementById('title').value;
   const messageData = document.getElementById('message').value;

   const data = {
      content: messageData,
      title: titleData,
      userId: authUser.user.id
   }

   const res = await makeRequest('posts', 'POST', data, authUser.token);
   
   getPosts();
}