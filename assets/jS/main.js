var mensagem = "<h2>Bem Vindo! Você agora engressou na fatec!</h2>";
var cenaAtual = 0;

function trocaImg(){
	document.getElementById("cena").src = "assets/img/cena" + cenaAtual + ".jpeg";
  document.getElementById("textoCena").innerHTML = mensagem;
}

function escolhe(){
	cenaAtual = parseInt(prompt("Digite o numero da cena"));
	trocaImg();
}

function mudaCena (escolha){
	switch (cenaAtual){
		case 0:
			  cenaAtual = 1;
        mensagem = "<h2>Você chegou ao portão de entrada depois de pegar 3 ônibus lotados</h2>";
  			trocaImg();
  			break;
  		case 1:
  			if (escolha == 1){
  				cenaAtual = 2;
  				mensagem = "<h2>Entrando...</h2>";
  				trocaImg();
  			}
  			else{
  				cenaAtual = 3;
  				mensagem = "<h2>Cheiro de... COMIDA!</h2>";
  				trocaImg();
  			}
  			break;
  		case 2:
  			if (escolha == 1){
  				alert("Boa noite para você também!");
          mensagem = "<h2>Chegamos no laboratório</h2";
          trocaImg();
  			}
  			else {
  			  alert("Mawn!!");
          mensagem = "<h2>Chegamos no laboratório</h2";
          trocaImg();
  			}
  			break;
  		case 3:
  			if (escolha == 1){
  				cenaAtual = 4;
  				mensagem = "<h2>Isso é uma coxinha ou pastel? O diretor de arte é horrível</h2>";
  				trocaImg();
  			}
  			else {
  				cenaAtual = 5;
  				mensagem = "<h2>Conversando... e conversando mais...</h2>";
  				trocaImg();
  			}
  			break;
      case 4:
        if (escolha){
          cenaAtual = 6;
          mensagem = "<h2>Você ficou pobre e agora vai ter de vender miçanga!!</h2>";
          trocaImg();
        }
        break;
      case 5:
        if (escolha){
          cenaAtual = 7;
          mensagem = "<h2>Você acaba de desenvolver um câncer</h2>";
          trocaImg();
        }
        break;
      case 6:
        if (escolha){
          cenaAtual = 2;
          mensagem = "<h2>Entrando...</h2>";
          trocaImg();
        }
        break;
      case 7:
        if (escolha){
          cenaAtual = 2;
          mensagem = "<h2>Entrando...</h2>";
          trocaImg();
        }
        break;

	}
}

