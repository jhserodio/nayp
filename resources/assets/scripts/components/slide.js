function slide () {

  var slides = document.querySelectorAll(".slide-item");
  var slideNav = document.querySelector(".slide-navegation");
  var slidePrev = document.querySelector('.slide-nav-prev');
  var slideNext = document.querySelector('.slide-nav-next');


  for ( let i = 0; i < slides.length; i++ ) {

    let itemList = document.createElement('LI');
    itemList.classList.add('slide-nav-item');
    itemList.appendChild(document.createElement('A'));
    slideNav.appendChild(itemList);

    var itemLink = document.querySelectorAll('.slide-nav-item a');
    itemLink[i].setAttribute('href', '#');

  }

  itemLink[0].classList.add('active');

  slideChange(itemLink, slides);

  slidePrev.addEventListener('click', () => {
    slideArrow(itemLink, slides, 'left');
  })

  slideNext.addEventListener('click', () => {
    slideArrow(itemLink, slides, 'right');
  })

}


function slideChange(btn, display) {

  for ( let i = 0; i < btn.length; i++ ) {
    btn[i].addEventListener('click', () => {
      if ( !btn[i].classList.contains('active') ) {
        slideClear(btn, display);
        btn[i].classList.add('active');
        display[i].classList.add('active');
      }
    })
  }

}

function slideClear(btn, display) {
  for ( let j = 0; j < btn.length; j++ ) {
    if ( btn[j].classList.contains('active') )
      btn[j].classList.remove('active');
      display[j].classList.remove('active');
  }
}

function slideArrow(btn, display, direction) {

  var position = 0;

  if ( direction === "left" )
    direction = -1;
  else if ( direction === "right" )
    direction = 1;
  else
    console.log("direction error arg")


  console.log(direction);

  for ( let i = 0; i < btn.length; i++ ) {
    if ( (btn[i].classList.contains('active'))) {
      var button = btn[i + direction];
      var slide = display[i + direction];
      position = i;
    }
  }

  if ( !(((position === 0) && (direction === -1)) || ((position === btn.length -1) && (direction === 1))) ) {
    slideClear(btn, display);
    button.classList.add('active');
    slide.classList.add('active');
  }

}


export { slide };
