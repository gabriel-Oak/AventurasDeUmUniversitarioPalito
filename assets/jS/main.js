var mensagem = "Bem Vindo! Você agora engressou na fatec!";
var cenaAtual = 0;


function dimen(){
  var altura = (window.innerHeight - 100) * 0.9;
  var largura = (window.innerWidth - 100) * 0.9;
  var font = (altura / 30);

  if (font < 14)
    font = 14;

  if (altura <= largura){
    document.getElementById("imagem").innerHTML = "<img src='"+ "assets/img/cena" + cenaAtual + ".jpeg" +"' id='cena' height='" + altura + "'>";
  } else {
    document.getElementById("imagem").innerHTML = "<img src='"+ "assets/img/cena" + cenaAtual + ".jpeg" +"' id='cena' width='" + largura + "'>";
  }

  
  var h = document.getElementsByTagName("h2");
  for (var i = 0; i < h.length; i++){
    h[i].style.fontSize = font + "px";
  }
}
 
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
          botao("escolha1", "Bom Dia!");
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
          cenaAtual = 8;
  				alert("Bom dia para você também!");
          mensagem = "Tem algo errado com os pássaros";
          trocaImg();
          botao("escolha1", "Avançar!");
          botao("escolha2", "", true);
          //botoes
  			}
  			else {
  			  alert("Mawn!!");
          cenaAtual = 9;
          mensagem = "Ownt *_*";
          trocaImg();
          botao("escolha1", "Avançar!");
          botao("escolha2", "", true);
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
      case 8:
        if (escolha){
          cenaAtual = 10;
          mensagem = "O laboratório de informática...";
          trocaImg();
          botao("escolha1", "Evaldo");
          botao("escolha2", "Deise");
        }
        break;
      case 9:
        if (escolha){
          cenaAtual = 10;
          mensagem = "O laboratório de informática...";
          trocaImg();
          botao("escolha1", "Evaldo");
          botao("escolha2", "Deise");
        }
        break;
      case 10:
        if (escolha == 1){
          cenaAtual = 11;
          mensagem = "Evaldo te ensinou a processar dados no cartorio";
          trocaImg();
          botao("escolha1", "Avançar!");
          botao("escolha2", "", true);
        }
        else {
          cenaAtual = 12;
          mensagem = "Deise te ensinou a usar o Linkedin";
          trocaImg();
          botao("escolha1", "Avançar");
          botao("escolha2", "", true);
        } 
        break;
      case 11:
        if (escolha){
          cenaAtual = 13;
          mensagem = "Galera hoje eu vou falar de...";
          trocaImg();
          botao("escolha1", "Avançar");
          botao("escolha2", "", true);
        }
        break;
      case 12:
        if (escolha){
          cenaAtual = 13;
          mensagem = "Galera hoje eu vou falar de...";
          trocaImg();
          botao("escolha1", "Avançar");
          botao("escolha2", "", true);
        }
        break;
      case 13:
        if (escolha){
          cenaAtual = 14;
          mensagem = "Essa piada não estava programada...";
          trocaImg();
          botao("escolha1", "Janela");
          botao("escolha2", "Aula");
        }
        break;

	}
}

