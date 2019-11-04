function calcularQuadradoPerfeito (num) {
  //retira a raiz quadrada, valor inteiro
  const raizQ = parseInt(Math.sqrt(num));
  //verifica se a raiz quadrada elevado ao quadrado é um valor exato
  return (raizQ * raizQ) == num;
}

function validaEntrada (num) {
   if(num == "" || num <= 0){
     return false;
   }
  return true;
}

const botao = document.getElementById("botao");

botao.onclick = function(){

  const valorDigitado = document.getElementById("num").value;
  
  if(!validaEntrada(valorDigitado)){
    alert("Insirar algum número maior que zero");
  }else if(calcularQuadradoPerfeito (valorDigitado)){
    alert("É Quadrado perfeito :)");
  }else{
    alert("Não é quadrado perfeito :(");
  }
  
} 