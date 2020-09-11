function validateCC() {
	//Setando variáveis
	var nome = document.forms["formCC"]["nameCC"].value;
	var numberCC = document.forms["formCC"]["numberCC"].value;
	var cvv = document.forms["formCC"]["CVV"].value;
	var password = document.forms["formCC"]["password"].value;
  var dataVal = document.forms["formCC"]["dataVal"].value;
  var email = document.forms["formCC"]["email"].value;

	//Validação de vazio em cada elemento de input

  if(nome == ""){
    alert("Erro!");
    exit();
  }
  if(numberCC == ""){
    alert("Erro!");
    exit();
  }
  if(cvv == ""){
    alert("Erro!");
    exit();
  }
  if(password == ""){
    alert("Erro!");
    exit();
  }
  if(dataVal == ""){
    alert("Erro!");
    exit();
  }
  if(email == ""){
    alert("Erro!");
    exit();
  }

  alert("Compra finalizada! Seu relógio está sendo enviado!");
}