
const overlay = document.querySelector('.overlay');
const  modal = document.querySelector('.modal-cart');
const buttons = document.querySelectorAll('.js-button');

if (buttons) {
  for (let button of buttons) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.add('modal-cart--show');
      overlay.classList.add('overlay--show');
    })
  }
}

if (overlay) {
  overlay.addEventListener('click', function (event) {
  event.preventDefault();
    if (overlay.classList.contains('overlay--show')) {
      modal.classList.remove('modal-cart--show');
      overlay.classList.remove('overlay--show');
    }
  })
}
