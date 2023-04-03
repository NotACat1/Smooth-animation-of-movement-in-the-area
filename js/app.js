function ready() {
}

document.addEventListener("DOMContentLoaded", ready);

window.onload = function() {
  document.getElementById('gallery').style.opacity = '1';
  document.getElementById('header').style.opacity = '0';
    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true
    })
};