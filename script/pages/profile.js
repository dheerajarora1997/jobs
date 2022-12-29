let editProfile = (ele) => {
 ele.classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('save-btn')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable')[0].classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable-element')[0].classList.remove('d-none')
}

let saveProfile = (ele) => {
 ele.classList.add('d-none')
 ele.closest('.parent-element').getElementsByClassName('edit-btn')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable')[0].classList.remove('d-none')
 ele.closest('.parent-element').getElementsByClassName('editable-element')[0].classList.add('d-none')
}


let addSkillBUtton = (ele) => {
 showUtilityOnePopup(ele);
}