
function cartPreview() {

  var btnCart = document.getElementById('active-cart');
  var btnShip = document.getElementById('active-ship');
  var displayCart = document.querySelector('.preview-seller');
  var displayShip = document.querySelector('.preview-shipping');
  var closeCart  = document.getElementById('close-preview-cart');;
  var closeShip  = document.getElementById('close-preview-ship');



  btnCart.addEventListener('click', () => {
    displayCart.setAttribute('style', 'display:block');
    document.body.setAttribute('style', 'overflow:hidden');
  })

  btnShip.addEventListener('click', () => {
    displayShip.setAttribute('style', 'display:block');
  })

  closeCart.addEventListener('click', () => {
    displayCart.removeAttribute('style');
    displayShip.removeAttribute('style');
    document.body.removeAttribute('style');
  })

  closeShip.addEventListener('click', () => {
    displayShip.removeAttribute('style');
  })


}

export { cartPreview };
