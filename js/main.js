(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Tanca el menú':'Obre el menú')});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('is-open')){btn.click();btn.focus()}});
  }
  var n=0,out=document.getElementById('cart-count');
  document.querySelectorAll('[data-add]').forEach(function(b){b.addEventListener('click',function(){n++;if(out)out.textContent=n;var l=b.textContent;b.textContent='Afegit';setTimeout(function(){b.textContent=l},1200)})});
  document.querySelectorAll('[data-qty]').forEach(function(b){b.addEventListener('click',function(){var i=document.getElementById('qty');i.value=Math.max(1,(parseInt(i.value,10)||1)+parseInt(b.dataset.qty,10))})});
  var g=document.getElementById('gallery'),nx=document.querySelector('[data-gallery-next]');
  if(g&&nx)nx.addEventListener('click',function(){var end=g.scrollLeft+g.clientWidth>=g.scrollWidth-4;g.scrollBy({left:end?-g.scrollWidth:g.clientWidth*.8,behavior:'smooth'})});
  document.querySelectorAll('[data-demo-form]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');
      if(!f.checkValidity()){f.reportValidity();return}
      if(m)m.textContent='Gràcies! (Previsualització: el formulari real s\'enviarà amb Elementor Pro.)';f.reset()});
  });
})();
