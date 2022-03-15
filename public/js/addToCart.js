window.addEventListener('load', function() {

//captura el span donde se contabilizan los productos en el carrito y lo muestra como número en la nav
/*let itemsInCarrito = () => {
    let storage = JSON.parse(localStorage.arrayCarrito).length;
    if (storage == 'undefined' || '[]' || NaN) {
    0
} else {
    storage
}
};*/

let itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length;
(itemsInCarrito) =>  itemsInCarrito == undefined || [] || NaN ? itemsInCarrito = 0 : itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length

//let itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length;

console.log('itemsInCarrito ' + typeof(itemsInCarrito) + ' ' + itemsInCarrito)
    
let itemsInCart = document.getElementById('cart-item-counter').innerHTML += itemsInCarrito
    
console.log('itemsInCart ' + typeof(itemsInCart) + ' ' + itemsInCart)


 //selecciona el link del botón para capturar el onclick
 let addToCart = document.querySelector('.add-cart-button');


 //captura las propiedades que luego querremos mostrar en la vista del carrito
 let title = document.querySelector('.product-name').title;
 let price = document.querySelector('.price-detail').title;
 let image = document.querySelector('.image-product-detail').title;


// crea un array de objetos con las propiedades del producto que acabamos de agregar
 let productsOnCart = [];

 addToCart.addEventListener('click', () => {
         productsOnCart = JSON.parse(localStorage.getItem('arrayCarrito')) || [];
         let newItem = {
             title: title,
             price: price,
             image: image,
             quantity: 1
         }

         console.log('contenido del local : ' + localStorage.getItem('arrayCarrito'))

         console.log('productsOnCart adentro ' + productsOnCart)
         productsOnCart.push(newItem)
         localStorage.setItem('arrayCarrito', JSON.stringify(productsOnCart));
         location.reload();
     })

 console.log('productsOnCart ' + productsOnCart)

 console.log('contenido del local 2: ' + localStorage.getItem('arrayCarrito'))



 })