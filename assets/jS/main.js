var mensagem = "Bem Vindo! Você agora engressou na fatec!";
var cenaAtual = 0;
 
function trocaImg(){
  var node = document.getElementById("descricao");
  var x = 0;
	document.getElementById("cena").src = "assets/img/cena" + cenaAtual + ".jpeg";
  //document.getElementById("textoCena").innerHTML = mensagem;
  //innerHTML é o metodo mais facíl porem não o oficial.
  while (node.firstChild)
    node.removeChild(node.firstChild);

  node.appendChild(document.createTextNode(mensagem));
}

function botao(id, texto, reseta){
  var node = document.getElementById(id);
  while (node.firstChild)
    node.removeChild(node.firstChild);
  node.appendChild(document.createTextNode(texto));

  if (reseta == true){
    node.className = "undec";
  } else {
    node.className = "decisao";
  }

}

function escolhe(){
	cenaAtual = parseInt(prompt("Digite o numero da cena"));
	trocaImg();
}

function mudaCena (escolha){
	switch (cenaAtual){
		case 0:
			  cenaAtual = 1;
        mensagem = "Você chegou ao portão de entrada depois de pegar 3 ônibus lotados";
  			trocaImg();
        botao("escolha1", "Entrar");
        botao("escolha2", "Cantina!");
  			break;
  		case 1:
  			if (escolha == 1){
  				cenaAtual = 2;
  				mensagem = "Entrando...";
  				trocaImg();
          botao("escolha1", "Boa Noite!");
          botao("escolha2", "Gatinho, gatinho");
  			}
  			else{
  				cenaAtual = 3;
  				mensagem = "Cheiro de... COMIDA!";
  				trocaImg();
          botao("escolha1", "Comer");
          botao("escolha2", "Conversar");
  			}
  			break;
  		case 2:
  			if (escolha == 1){
  				alert("Boa noite para você também!");
          mensagem = "Chegamos no laboratório";
          trocaImg();
          //botoes
  			}
  			else {
  			  alert("Mawn!!");
          mensagem = "Chegamos no laboratório";
          trocaImg();
          //botoes
  			}
  			break;
  		case 3:
  			if (escolha == 1){
  				cenaAtual = 4;
  				mensagem = "Isso é uma coxinha ou pastel? O diretor de arte é horrível";
  				trocaImg();
          botao("escolha1", "Avançar!");
          botao("escolha2", "", true);
  			}
  			else {
  				cenaAtual = 5;
  				mensagem = "Conversando... e conversando mais";
  				trocaImg();
          botao("escolha1", "Avançar");
          botao("escolha2", "", true);
  			}
  			break;
      case 4:
        if (escolha){
          cenaAtual = 6;
          mensagem = "Você ficou pobre e agora vai ter de vender miçanga!!";
          trocaImg();
          botao("escolha1", "Entrar -->");
          botao("escolha2", "", true);
        }
        break;
      case 5:
        if (escolha){
          cenaAtual = 7;
          mensagem = "Você acaba de desenvolver um câncer";
          trocaImg();
          botao("escolha1", "Entrar -->");
          botao("escolha2", "", true);
        }
        break;
      case 6:
        if (escolha){
          cenaAtual = 2;
          mensagem = "Entrando...";
          trocaImg();
          botao("escolha1", "Boa Noite!");
          botao("escolha2", "Gatinho, gatinho");
        }
        break;
      case 7:
        if (escolha){
          cenaAtual = 2;
          mensagem = "Entrando...";
          trocaImg();
          botao("escolha1", "Boa Noite!");
          botao("escolha2", "Gatinho, gatinho");
        }
        break;

	}
}

