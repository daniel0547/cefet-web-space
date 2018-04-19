// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

const btnExpand = document.querySelectorAll('.botao-expandir-retrair');
btnExpand.forEach(function(el) {
  el.addEventListener('click', function(evento) {
    	el.parentNode.classList.toggle('expandido');
  });
});
