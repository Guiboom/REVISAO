const buttonGanhar = document.getElementById('ganhar');
const texto = document.getElementById('texto');
const cupom = document.getElementById('cupom').value;
const senha ='007';


buttonGanhar.addEventListener('click', () => {
    if (cupom.value==senha){
        texto.textContent="Você ganhou 10% de desconto"
        buttonGanhar.textContent="Resgatado"
    }else{
        texto.textContent="Cupom errado!."
        buttonGanhar.textContent="Ganhar brinde"

    }

});
console.log(senha)




