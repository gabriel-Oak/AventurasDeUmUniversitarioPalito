alert("Bem Vindo! Você agora engressou na fatec!");
var cenaAtual = 0;

function trocaImg(){
	document.getElementById("cena").src = "assets/img/cena" + cenaAtual + ".jpeg";
}

function escolhe(){
	cenaAtual = parseInt(prompt("Digite o numero da cena"));
	trocaImg();
}

function mudaCena (escolha){
	switch (cenaAtual){
		case 0:
			cenaAtual = 1;
  			trocaImg();
  			alert("Você chegou ao portão de entrada depois de pegar 3 ônibus lotados");
  			break;
  		case 1:
  			if (escolha == 1){
  				cenaAtual = 2;
  				alert("Entrando...");
  				trocaImg();
  			}
  			else{
  				cenaAtual = 3;
  				alert("Cheiro de... COMIDA!");
  				trocaImg();
  			}
  			break;
  		case 2:
  			if (escolha == 1){
  				alert("Boa noite para você também!");
  			}
  			else {
  				alert("Mawn!!");
  			}
  			break;
  		case 3:
  			if (escolha == 1){
  				cenaAtual = 4;
  				alert("Isso é uma coxinha ou pastel? O diretor de arte é horrível");
  				trocaImg();
  			}
  			else {
  				cenaAtual = 5;
  				alert("Conversando... e conversando mais...");
  				trocaImg();
  			}
  			break;
      case 4:
        if (escolha){
          cenaAtual = 6;
          alert("Você ficou pobre e agora vai ter de vender miçanga!!");
          trocaImg();
        }
        break;
      case 5:
        break;
      case 6:
        if (escolha){
          cenaAtual = 2;
          alert("Entrando...");
          trocaImg();
        }
        break;

	}
}

