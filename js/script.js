'use strict'

Fancybox.bind( "[data-fancybox]" );

$( 'button' ).click( filterItems );
function filterItems() {
    let button = this;
    let selector = $( button ).data( 'filter' );
    console.log( selector );
    $( '#products img' ).not( selector ).hide( 500 );
    $( selector ).show( 500 );
}

const checkForm = function (event) {
    event.preventDefault();
    if (fullname.value, email.value){
      webForm.submit();
    } else {
      error.classList.add("show");
      fullname, email.focus();
      errorSound.volume = 0.75;
      errorSound.play();
    }
};

let webForm = document.querySelector('#webForm');
let name = document.querySelector('#fullname');
let email = document.querySelector('#email');
let error = document.querySelector('#error');
let errorSound = document.querySelector('#error-sound');
  
// script initialisation
  
webForm.addEventListener('submit', checkForm);