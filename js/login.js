var x;
var y;

function validateFormCriar() {
	//Setando variáveis
	var emailCriar = document.forms["formCriar"]["emailCriar"].value;
	var passwordCriar = document.forms["formCriar"]["passwordCriar"].value;

	//Validação de vazio em cada elemento de input
	if (emailCriar == "") {
		alert("Digite o email para criação de conta!");
		exit();
	}

	if (passwordCriar == "") {
		alert("Digite a senha para criação da conta!");
		exit();
	}
	
  alert("Sua conta foi criada com sucesso!");
}

function validateFormEntrar(){
  //Setando variáveis
  var emailEntrar = document.forms["formEntrar"]["emailEntrar"].value;
	var passwordEntrar = document.forms["formEntrar"]["passwordEntrar"].value;

  //Validação de vazio em cada elemento de input
  if (emailEntrar == "") {
  alert("Digite o email para logar!");
  exit();
  }

  if (passwordEntrar == "") {
  alert("Digite a senha para logar!");
  exit();
	}

  if(emailEntrar == "rolex@gmail.com" && passwordEntrar == "123") {
    alert("Logado!");
  }else{
    alert("Erro!");
  }
}