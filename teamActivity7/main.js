window.addEventListener('keyup', (key) => {
   //get data from key and find element
   const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
   const button = document.querySelector(`.key[data-key="${key.keyCode}"]`);
   //if null end function
   if(!audio) return;
   //play sound
   audio.currentTime = 0;
   audio.play();
   //Key visuals
   button.classList.add('playing');
   //move button down
   moveButton(button);
});

function removeTransition(e) {
   //if not transofrm return
   if(e.propertyName !== 'transform') return;
   //transform back
   this.classList.remove('playing');
}

function moveButton(button) {
   let computedStyle = window.getComputedStyle(button);
   computedStyle = Number(computedStyle.marginTop.match(/(\d+)/)[0]);
   if(computedStyle >= 110) {
      button.style.marginTop = `1rem`;
   }
   else {
      button.style.marginTop = `${computedStyle += 10}px`;
   }
}

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => {
   key.addEventListener(`transitionend`, removeTransition)
})