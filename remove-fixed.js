var i, elements = document.querySelectorAll('body *');
for (i = 0; i < elements.length; i++) {
  if (getComputedStyle(elements[i]).position === 'fixed') {
    elements[i].parentNode.removeChild(elements[i]);
  }
}
elements = document.querySelectorAll('body,html');
for (i = 0; i < elements.length; i++) {
  if (getComputedStyle(elements[i]).overflow === 'hidden') {
    elements[i].style.overflow = 'visible';
  }
  if (getComputedStyle(elements[i]).position === 'fixed') {
    elements[i].style.position = 'static';
  }
}
