.estrelas input[type=radio] {
  display: none;
}
.estrelas label i.fa:before {
  content:'\f005';
  color: #FC0;
}
.estrelas input[type=radio]:checked ~ label i.fa:before {
  color: #CCC;
}

 $(document).ready(function() {
    M.updateTextFields();
  });