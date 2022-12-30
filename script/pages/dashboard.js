if (document.getElementById('dragItemBox')) {
 new Sortable(dragItemBox, {
  animation: 150,
  ghostClass: 'blue-background-class',
  handle: '.dragHandle'
 });
}