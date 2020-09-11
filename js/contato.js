$(document).ready(function() {
    $('textarea#textarea1').characterCounter();
  });

function validateForm() {
	//Setando variáveis
	var nome = document.forms["formContact"]["name"].value;
	var email = document.forms["formContact"]["email"].value;
	var assunto = document.forms["formContact"]["subject"].value;
	var mensagem = document.forms["formContact"]["textarea"].value;

	//Validação de vazio em cada elemento de input
	if (nome == "") {
		alert("Digite algo no nome!");
		exit();
	}
	if (email == "") {
		alert("Digite algo no email!");
		exit();
	}
	if (assunto == "") {
		alert("Digite algo no assunto!");
		exit();
	}
	if (mensagem == "") {
		alert("Digite algo na mensagem!");
		exit();
	}
	if (mensagem.length > 300) {
		alert("Sua mensagem tem mais de 300 caracteres!");
		exit();
	}

	alert("Olá " + nome + ", seu contato foi enviado para nosso suporte, responderemos assim que possível através do seu email: " + email);
}

 $(document).ready(function() {
    M.updateTextFields();
  });