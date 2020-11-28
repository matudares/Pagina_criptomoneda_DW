var criptomoneda, total, calculo, valor, output, borrar;

borrar =document.getElementById('borrar').addEventListener('click', function(){
    output = document.getElementById('output');
    valor = document.getElementById('valor');
    valor.innerText = 0;
    output.innerText = "Resultado: "; 
})

calculo= document.getElementById("calcular").addEventListener('click', function(){

    criptomoneda = document.getElementById('crypto').value;
    valor= document.getElementById('valor').value
    output= document.getElementById('output')
    console.log(valor);
    console.log(criptomoneda);

    if(criptomoneda == 1){
        total= valor/16663.5;
        console.log(total);
        output.innerText ="Resultado: " + total + " Bitcoin";   
    } if(criptomoneda == 2){
        total = valor/0.00338;
        console.log(total);
        output.innerText ="Resultado: " + total + " Dogecoin";
    } if(criptomoneda == 3){
        total = valor/0.00251;
        console.log(total);
        output.innerText ="Resultado: " + total + " Akroma";
    } if(criptomoneda == 4){
        total = valor/30;
        console.log(total);
        output.innerText ="Resultado: " + total + " Petro";
    } if(valor<0){
        output.innerText ="Error";
        
    }
    
})


