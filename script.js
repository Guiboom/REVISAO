const buttonGanhar = document.getElementById('ganhar');
const texto = document.getElementById('texto');
const cupom = document.getElementById('cupom');
const senha ='007';


buttonGanhar.addEventListener('click', () => {
    if (cupom.value==senha){
        texto.textContent="Você ganhou 10% de desconto"
    }else{
        texto.textContent="Cupom errado!."
    }
    buttonGanhar.textContent="Resgatado"
});
console.log(senha)




