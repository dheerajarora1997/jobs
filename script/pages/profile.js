let editAbout = (ele) => {
 ele.classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('save-btn')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable')[0].classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable-element')[0].classList.remove('d-none')
}

let saveAbout = (ele) => {
 ele.classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('edit-btn')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable-element')[0].classList.add('d-none')
}


let addSkillButton = (ele, placement, size) => {
 showUtilityOnePopup(ele, placement, size);
}

let addProjectButton = (ele, placement, size) => {
 showUtilityOnePopup(ele, placement, size);
}

let addLang = (ele, placement, size) => {
 showUtilityOnePopup(ele, placement, size);
}

let addReview = (ele, placement, size) => {
 showUtilityOnePopup(ele, placement, size);
}

let editProfile = (ele, placement, size) => {
 showUtilityOnePopup(ele, placement, size);
}

let tabTrigger = (el, ele, element) => {
 activeLink = document.getElementsByClassName(ele)[0].querySelector('a.active');
 activeLink.classList.remove('active')
 el.classList.add('active')
 domScroll(element);
}