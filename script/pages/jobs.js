let filter_block = document.getElementsByClassName('filter-block');

let openAdvanceFilter = (e) => {
 if (window.innerWidth < 991) {
  if (e.target.closest('.sidebar').classList.contains('opened')) {
   e.target.closest('.sidebar').classList.remove('opened')
  }
  else {
   e.target.closest('.sidebar').classList.add('opened')
  }
 }
}

if (filter_block) {
 filter_block[0].addEventListener("click", openAdvanceFilter)
}