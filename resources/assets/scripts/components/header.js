import { toggleDisplay } from '../utils/toggleElements'

toggleDisplay("active-collections");
toggleDisplay("active-info");
toggleDisplay("active-search");

// dropdown function header

var btnDropdown = document.querySelectorAll(".item-drop .btn-dropdown");
var itemDropdown = document.querySelectorAll(".item-drop");
var displayDropdown = document.querySelectorAll(".dropdown");

function toggleDropdown( btn, item, display ) {
  for ( let i = 0; i < item.length; i++ ) {
    btn[i].addEventListener('click', () => {
      // console.log(display[i]);
      if ( item[i].classList.contains("active") ) {
        for ( let j = 0; j < btn.length; j++ ) {
          item[j].classList.remove('inactive');
        }
        display[i].classList.remove('active');
        item[i].classList.remove("active");
      } else {
        for ( let j = 0; j < item.length; j++ ) {
          if( btn[j] !== btn[i] ) {
            item[j].classList.add('inactive');
          }
        }
        display[i].classList.add('active');
        item[i].classList.add("active");
      }
    })
  }
}

toggleDropdown(btnDropdown, itemDropdown, displayDropdown);
