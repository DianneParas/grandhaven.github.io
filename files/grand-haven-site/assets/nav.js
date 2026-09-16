(function(){
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('mobilePanel');
  if(!toggle || !panel) return;

  function closeMenu(){
    toggle.setAttribute('aria-expanded','false');
    panel.classList.remove('open');
  }
  function openMenu(){
    toggle.setAttribute('aria-expanded','true');
    panel.classList.add('open');
  }

  toggle.addEventListener('click', function(){
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  panel.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMenu();
  });
})();
