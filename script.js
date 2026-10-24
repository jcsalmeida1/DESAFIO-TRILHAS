const Fiatuno =25000;
const corolla =120000;
const onix =65000;

function simularCompra(){
    const quantidadeFiatuno= Number(
  prompt("Quantos FIAT Uno deseja comprar? \n Valor: R$25000,00 reais \n Digite 0 para não comprar.")
);
   const quantidadecorolla= Number(
  prompt("Quantos Corolla deseja comprar?\n Valor: R$120000,00 reais \n  Digite 0 para não comprar.")
);
   const quantidadeonix= Number(
  prompt("Quantos Onix deseja comprar? \n Valor: R$65000,00 reais \n Digite 0 para não comprar.")
);

if (quantidadeFiatuno === 0 && quantidadecorolla === 0 && quantidadeonix === 0) {
    alert(
        `Não foi adicionado nenhum produto na compra.Inicie novamente a compra e escolha um produto`
    )

}else {
const valortotal= quantidadeFiatuno*Fiatuno + quantidadecorolla*corolla + quantidadeonix*onix;

 
  alert(
     `---RESUMO DA COMPRA -LOJA CARROS TRILHA ---\n` +
    `Quantidades escolhidas:\n` +
    `Fiat Uno:${quantidadeFiatuno} unidades.--R$25000,00 reais \n ` +
    `Corolla: ${quantidadecorolla} unidades.--R$120000,00 reais\n` +
    `Onix: ${quantidadeonix} unidades.--R$65000,00 reais\n `+
    ` Valor total da compra: R$ ${valortotal},00`
    )
};
}

 
    
