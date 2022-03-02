window.addEventListener('load', function() {


//captura las propiedades en la vista del carrito
/*let titleCart = document.querySelector('.product-name-cart');
let priceCart = document.querySelector('.price-detail-cart');
let imageCart = document.getElementById('image-product-cart');

let mainProductCartContainers = document.querySelector('.main-product-detail-cart');

console.log('mainProductCartContainers ' + typeof(mainProductCartContainers) + ' ' + mainProductCartContainers)*/

/*//captura el span donde se contabilizan los productos en el carrito y lo muestra como número en la nav

let itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length;

console.log('itemsInCarrito ' + typeof(itemsInCarrito) + ' ' + itemsInCarrito)*/


//Array de productos para ser recorrido
let arrayProds = JSON.parse(localStorage.arrayCarrito);

console.log(arrayProds);


//Ciclo for que trae los objetos de cada producto
/*let forEachProds = arrayProds.forEach(function(arrayProd, i){
    console.log(arrayProd)

    titleCart.innerHTML += arrayProd.title
    priceCart.innerHTML += arrayProd.price
    imageCart.src = arrayProd.image
})*/



/*function cicloFor() {for (let x = 0, x < arrayProds.length, x++) {
    if (arrayProds.length == 0 || []) {
        console.log('no hay nada en el carrito')
    } else {
        mainProductCartContainers.innerHTML += forEachProds
}
}}*/



/*
arrayProds.forEach(function(arrayProd, i){
    console.log(arrayProd)

    titleCart.innerHTML += arrayProd.title
    priceCart.innerHTML += arrayProd.price
    imageCart.src = arrayProd.image
})*/



/*mainProductCartContainers.forEach(function(mainProductCartContainer) {
    mainProductCartContainer.arrayProds.forEach(function(arrayProd, i){
        console.log(arrayProd)
    
        titleCart.innerHTML += arrayProd.title
        priceCart.innerHTML += arrayProd.price
        imageCart.src = arrayProd.image
    })
})*/


const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

if (typeof localStorage.arrayCarrito == "undefined" || typeof localStorage.arrayCarrito == "[]") {
    let div = document.getElementById("main-container-detail");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
} else {
    for (let i = 0; i < arrayProds.length; i++) {
        let producto = arrayProds[i];
        let div = document.querySelector(".main-container-detail");
        let contenido = ` <section class="main-container-detail">

        <div class="main-product-detail-cart">
            <img class="image-product-cart" src="${producto.image}" alt="" width="100%" height="100%" name="image-product-cart" id="image-product-cart">
            <h4 class="product-name-cart" name="product-name-cart" >${producto.title}</h4>
            <p class="price-detail-cart" name="price-detail-cart" >${producto.price}</p>
    
                <div class="quantity-and-cart-block">
                <div class="product-quantity-class">
                <label for="product-quantity">Cantidad:</label>
                <input class="p-detail" list="product-quantity1" placeholder="0" id="product-quantity">
                <datalist id="product-quantity1">
                        <option value="0">
                        <option value="1">
                        <option value="2">
                        <option value="3">
                        <option value="4">
                        <option value="5">
                </datalist>
               
                </div>
    </section>`;

      div.innerHTML += contenido;
    }
  }




})