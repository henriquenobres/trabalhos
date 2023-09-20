function Enviar(){
    var nome = document.getElementById ("nomeid");

    if(nome.value  != ""){
    
    alert( 'Obrigado sr(a)' + nome.value + 
    'seu formulário foi enviado e descartado')

    }
 else{
    alert('whats is this')
 }

}

function limpa_formulário_cep(){
//Limpa os dados do formuláriode cep.

document.getElementById('rua').value=("");
document.getElementById('bairro').value=("");
document.getElementById('cidade').value=("");
document.getElementById('uf').value=("");
}
function meu_callback(conteudo){
   if(("erro" in conteudo)){
      document.getElementById('rua').value=("conteudo.logradouro");
      document.getElementById('rua').value=("conteudo.logradouro");
      document.getElementById('rua').value=("conteudo.logradouro");
      document.getElementById('rua').value=("conteudo.logradouro");

}else{
limpa_formulário_cep();
alert ("Irmão, tu errou o CEP")
}

      function pesquisacep(valor){
         
      }