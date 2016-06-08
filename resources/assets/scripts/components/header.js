import { toggleDisplay } from '../utils/toggleElements'

toggleDisplay("active-collections");
toggleDisplay("active-info");
toggleDisplay("active-search");

// dropdown function header

var btnDropdown = document.querySelectorAll(".item-drop");
var displayDropdown = document.querySelectorAll(".dropdown");

function toggleDropdown( btn, display ) {
  for ( let i = 0; i < btn.length; i++ ) {
    btn[i].addEventListener('click', () => {
      // console.log(display[i]);
      if ( btn[i].classList.contains("active") ) {
        for ( let j = 0; j < btn.length; j++ ) {
          if( btn[j] !== btn[i] ) {
            btn[j].removeAttribute('style');
          }
        }
        display[i].setAttribute('style', 'display:none');
        btn[i].classList.remove("active");
      } else {
        for ( let j = 0; j < btn.length; j++ ) {
          if( btn[j] !== btn[i] ) {
            btn[j].setAttribute('style', 'display:none');
          }
        }
        display[i].setAttribute('style', 'display:block');
        btn[i].classList.add("active");
      }
    })
  }
}

toggleDropdown(btnDropdown, displayDropdown);
