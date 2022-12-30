// init Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
});


// toggle Navigation Menu
let toggleMenu = (ele) => {
 let wrapper = document.querySelector('.wrapper');
 if (wrapper.classList.contains('active')) {
  wrapper.classList.remove('active')
  ele.querySelector('.material-icons-outlined').innerHTML = 'arrow_back';
 } else {
  wrapper.classList.add('active')
  ele.querySelector('.material-icons-outlined').innerHTML = 'menu';
 }
}

// Close Navigation
let closeNavigation = () => {
 let wrapper = document.querySelector('.wrapper');
 wrapper.classList.add('active')
 document.querySelector('.toggle-navigation').querySelector('.material-icons-outlined').innerHTML = 'menu';
}


// Utility One Popup
let utilityOnePopup = new bootstrap.Modal('#utilityOnePopup', { keyboard: false });

// show Utility One Popup
let showUtilityOnePopup = (title, size, placement) => {

 document.getElementById('utilityOneLabel').innerHTML = title;
 utilityOnePopup.show('show');

 if (size) {
  document.getElementById('utilityOnePopup').getElementsByClassName('modal-dialog')[0].classList.add(`modal-${size}`)
  console.log(document.getElementById('utilityOnePopup').getElementsByClassName('modal-dialog')[0])
 } else {
  document.getElementById('utilityOnePopup').getElementsByClassName('modal-dialog')[0].classList.remove('modal-sm', 'modal-md', 'modal-lg', 'modal-llg', 'modal-xlg', 'modal-full')
 }

 if (placement) {
  document.getElementById('utilityOnePopup').classList.add('offCanvasModal', placement)
 } else {
  document.getElementById('utilityOnePopup').classList.remove('offCanvasModal', 'right', 'left')
 }
}

// Hide Utility One Popup
let hideUtilityOnePopup = () => {
 utilityOnePopup.hide('hide');
}

// document scroll Common function (pass id of element)
let domScroll = (element) => {
 if (document.getElementById(element)) {
  window.scroll(0, document.getElementById(element).offsetTop - 55);
 }
}