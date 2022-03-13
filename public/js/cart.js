 window.addEventListener('load', function() {

 //Trae los ítems del localStorage y los dispone para ser utilizados
 let arrayProds = JSON.parse(localStorage.arrayCarrito);

 console.log(arrayProds);


 //Funcionalidad que transforma el array original en un objeto de objetos que mergea los iguales
 let arrayReduced = arrayProds.reduce((acc, item) => {
     let title = item.title;
     let price = parseFloat(item.price);
     let image = item.image;
     let quantity = item.quantity;
     let length = acc[item.title] ? quantity = arrayProds.filter((title) => title.title == [item.title]).length : quantity

     console.log(length)

     return {...acc, [item.title]:{title, price: price * length, image, quantity: length}}
        
 },[]);

 console.log(arrayReduced)


 //Transforma el objeto de objetos en un array de arrays
 let arrayEntries = Object.entries(arrayReduced);

 console.log(arrayEntries[0][1])


// Convierte el array de arrays en un nuevo array simplificado que puede ser iterado
 let arrayFor = arrayEntries.map(x => x[1])

 console.log(arrayFor)


 //Suma total
 let totalAmount = arrayProds.reduce((acc, item) => {
     return acc = acc + parseFloat(item.price)
 }, 0);
 console.log('suma total ' + typeof(totalAmount) + ' ' + totalAmount)


 //Para la exposición en la vista
 const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

 if (typeof arrayProds == undefined || typeof arrayProds == []) {
     let div = document.querySelector(".main-container-detail-cart");
     div.innerHTML += `<h2 class="product-name-cart">No hay productos agregados </h2>`;
 } else {
    
     for (let i = 0; i < arrayFor.length; i++) {
         let producto = arrayFor[i]

        
         let div = document.querySelector(".main-container-detail-cart");
         let contenido = `<section class="main-container-detail">

         <div class="main-product-detail-cart">
             <img class="image-product-cart" src="${producto.image}" alt="" width="100%" height="100%" name="image-product-cart" id="image-product-cart">
             <h4 class="product-name-cart" name="product-name-cart" >${producto.title}</h4>
             <p class="price-detail-cart" name="price-detail-cart" >$${producto.price}</p>
    
                 <div class="quantity-and-cart-block">
                 <div class="product-quantity-cart">Cantidad:    ${producto.quantity}</div><div class="reduce-button-cart" type="button" id="reduce-button-cart">-</div><div class="add-button-cart" type="button" id="add-button-cart">+</div> 

                
                 </div>
        
     </section>`;

       div.innerHTML += contenido;
     }
   }

   
if (typeof arrayProds != undefined || typeof arrayProds != []) {
    let div = document.querySelector(".total-amount");
    let totalAmount2 = totalAmount;
    let contenido = `<div>Total: ${totalAmount2}</div>
    <div class="clear-button-cart" type="button">Vaciar carrito</div>
    <div class="checkout-button-cart" type="button">Checkout</div>`;

    div.innerHTML += contenido;
}


//Botones para añadir o quitar ítems del localStorage
let removeItemCart = document.getElementById('reduce-button-cart')
let addItemCart = document.getElementById('add-button-cart')

removeItemCart.addEventListener('click', () => {
   console.log('item removed!')
})
addItemCart.addEventListener('click', () => {
    console.log('item added!')
 })


 //Botón para borrar localStoarge
let clearCart = document.querySelector('.clear-button-cart')

clearCart.addEventListener('click', () => {
    console.log('cart cleared!')

    localStorage.clear();
    alert('Vaciaste el carrito');
    location.reload();
 })


 //Botón checkout cart
 let checkoutCart = document.querySelector('.checkout-button-cart')

 checkoutCart.addEventListener('click', () => {
    console.log('checkout completed!')
    alert('¡Gracias por tu compra!');
    location.reload();
 })

 })