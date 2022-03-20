window.addEventListener('load', function() {

//Trae los ítems del localStorage y los dispone para ser utilizados
let arrayFavs = JSON.parse(localStorage.arrayFav);
   
console.log(arrayFavs);
   
   
//Funcionalidad que transforma el array original en un objeto de objetos que mergea los iguales
let arrayReduced = arrayFavs.reduce((acc, item) => {
   
    return {...acc, [item.title]:(item)}
           
},[]);
   
console.log(arrayReduced);

 //Transforma el objeto de objetos en un array de arrays
 let arrayEntries = Object.entries(arrayReduced);

 console.log(arrayEntries[0][1])


// Convierte el array de arrays en un nuevo array simplificado que puede ser iterado
 let arrayFor = arrayEntries.map(x => x[1])

 console.log(arrayFor)
   
//Para la exposición en la vista   
if (arrayFavs.length === 0) {
    let div = document.querySelector(".main-container-detail-favs");
    div.innerHTML += `<section class="main-container-fav-articles">

    <h2 class="render-if-its-empty">No hay favoritos</h2>

    <form action="/products" method="get">
     <button class="checkout-button-cart">Dar un vistazo</button>
     </form>

    </section>`;
} else {
       
    for (let i = 0; i < arrayFor.length; i++) {
        let producto = arrayFor[i]
   
           
        let div = document.querySelector(".main-container-detail-favs");
        let contenido = `<section class="main-container-fav-articles">

         <div class="main-product-detail-fav">
         <a href="/products/detail/${producto.id}"><img class="image-product-fav" src="${producto.image}" alt="" width="100%" height="100%" name="image-product-cart" id="image-product-cart"></a>
             <h4 class="product-name-fav" name="product-name-cart" >${producto.title}</h4>
             <div class="details-fav-container">
             <p class="price-detail-fav" name="price-detail-fav" >$${producto.price}</p>
    
                 <div class="quantity-and-fav-block">
                 <div class="product-quantity-fav">Eliminar</div>
                 <div class="button-container-fav">
                 <div class="remove-fav-button" type="button" product-title="${producto.title}">-</div>
                 </div>
                 
                
                 </div>
                 </div>
        
     </section>`;
   
          div.innerHTML += contenido;
        }
      }
   
      
   /*if (arrayFavs.length != 0) {
       let div = document.querySelector(".total-amount");
       let contenido = `<div class="fav-total">
       
       <div class="clear-button-fav" type="button">Limpiar favoritos</div></div>`;
   
       div.innerHTML += contenido;
   }*/

let removeButton = document.querySelectorAll('.remove-fav-button')

removeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('item removed!')
    
        console.log(e.target.getAttribute('product-title'))

        //productsOnFavs = JSON.parse(localStorage.getItem('arrayFav'))

        let productTitle = e.target.getAttribute('product-title');

        let findIndex = arrayFor.map(object => object.title).indexOf(productTitle)

        console.log(findIndex)

        let itemRemoved = arrayFor.splice(findIndex, 1)

        console.log(itemRemoved)

        //console.log(productsOnFavs)

        localStorage.setItem('arrayFav', JSON.stringify(arrayFor));
        location.reload();
     })
})
   
   
//Botón para borrar localStoarge
/*let clearCart = document.querySelector('.clear-button-fav')
   
clearCart.addEventListener('click', () => {
    console.log('favs cleared!')
   
    localStorage.setItem('arrayFavs', JSON.stringify([]));
    alert('Eliminaste lista de favoritos');
    location.reload();
})*/
   
})