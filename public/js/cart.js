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

/*let arrayReduced = arrayProds.reduce((arrayReduced, item) => {
    for (const [itemName, itemCount] of Object.entries(item)) {
        if (!arrayReduced[itemName]) {
            arrayReduced[itemName] = 0;
        }
        arrayReduced[itemName] += itemCount;
    }
    return arrayReduced
},{});

console.log(arrayReduced)*/

let arrayReduced = arrayProds.reduce((acc, item) => {
    /*if (acc[item.title]) {
        console.log('item ' + typeof(item.price) + ' ' + item.price)
        console.log(item)
        

        price + item.price

        //[item.quantity] = item.quantity + 1;
        //console.log('q ' + item.quantity)
    } else {*/
        return {...acc, [item.title]:{...item}}   
    //}
},{});

console.log(arrayReduced)



//Suma total
let totalAmount = arrayProds.reduce((acc, item) => {
    return acc = acc + parseFloat(item.price)
}, 0);
console.log('suma total ' + typeof(totalAmount) + ' ' + totalAmount)



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

if (typeof arrayProds == "undefined" || typeof arrayProds == "[]") {
    let div = document.querySelector(".main-container-detail-cart");
    div.innerHTML += `<h2 class="product-name-cart">No hay productos agregados </h2>`;
} else {
    
    for (let i = 0; i < arrayProds.length; i++) {
        let producto = arrayProds[i]
        

        
        let div = document.querySelector(".main-container-detail-cart");
        let contenido = ` <section class="main-container-detail">

        <div class="main-product-detail-cart">
            <img class="image-product-cart" src="${producto.image}" alt="" width="100%" height="100%" name="image-product-cart" id="image-product-cart">
            <h4 class="product-name-cart" name="product-name-cart" >${producto.title}</h4>
            <p class="price-detail-cart" name="price-detail-cart" >$${producto.price}</p>
    
                <div class="quantity-and-cart-block">
                <div class="product-quantity-cart">Cantidad:    ${arrayProds.length}</div><div class="reduce-button-cart" type="button">-</div><div class="add-button-cart" type="button">+</div> 

                
                </div>
    </section>`;

      div.innerHTML += contenido;
    }
  }




})