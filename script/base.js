var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Utility One Popup
let utilityOnePopup = new bootstrap.Modal('#utilityOnePopup', { keyboard: false });

// show Utility One Popup
let showUtilityOnePopup = (title) => {
 document.getElementById('utilityOneLabel').innerHTML = title;
 utilityOnePopup.show('show');
} 

// Hide Utility One Popup
let hideUtilityOnePopup = () => {
 utilityOnePopup.hide('hide');
} 