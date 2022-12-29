var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
});

// show Utility One Popup
let showUtilityOnePopup = (title) => {
 let utilityOnePopup = new bootstrap.Modal('#utilityOnePopup', {
  keyboard: false
 });
 document.getElementById('utilityOneLabel').innerHTML = title;
 utilityOnePopup.show();
} 

let hideUtilityOnePopup = () => {
 let utilityOnePopup = new bootstrap.Modal('#utilityOnePopup', {
  keyboard: false
 });
 console.log(utilityOnePopup);
 utilityOnePopup.hide();
} 