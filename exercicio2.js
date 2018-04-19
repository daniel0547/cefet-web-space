// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
var at=0;

document.getElementById("proximo").addEventListener('click', function(evento) {
	at++;
	if(at>4){
		at=0;
	}
  	document.getElementById("slide").src = servidorDasImagens+todasAsImagens[at];
	console.log(at);
 });

document.getElementById("anterior").addEventListener('click', function(evento) {
	at--;
	if(at<0){
		at=4;
	}
  	document.getElementById("slide").src = servidorDasImagens+todasAsImagens[at];
	console.log(at);
});
