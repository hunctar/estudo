function calcularPreco(){
    //cria referencia aos elementos da pagina
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outPagar = document.getElementById("outPagar");
    
    //obtém conteúdos dos campos de entrada
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
   
    //faz o cálculo de consumo
    var pagar = (tempo / 15) * valor;

    //apresenta o valor para o cliente:
    outPagar.textContent = "Valor a pagar: R$ " + pagar.toFixed(2);
}
//cria uma referencia ao elemento btnCalcular
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularPreco);