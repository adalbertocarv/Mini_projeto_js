// velocidade maxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
//math.floor()
// casi pontos maior que 12 -> "carteira suspensa"
verificarVelocidade(130);

function verificarVelocidade(velocidade) {
   const velocidadeMaxima = 70;
   const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) 
        console.log('ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if(pontos >= 12)
            console.log('carteira suspensa');
        else
            console.log('Pontos',pontos);
    }

}
