const btnCart = document.querySelector('conteiner-icon')
const conteinerCartProduct = document.querySelector('container-cart-product')
btnCart.addEventListener('clic', ()=>{
    conteinerCartProduct.classList.toggle('hidden-cart')
})