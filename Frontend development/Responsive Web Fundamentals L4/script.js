var menu = document.getElementById('menu');
  menu.addEventListener('click', function(e){
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
