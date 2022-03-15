window.addEventListener('load', function() {   
    
     //selecciona el link del botón para capturar el onclick
     let addToFav = document.querySelector('.add-to-fav-button');
    
    
     //captura las propiedades que luego querremos mostrar en la vista del carrito
     let title = document.querySelector('.product-name').title;
     let price = document.querySelector('.price-detail').title;
     let image = document.querySelector('.image-product-detail').title;
    
    
    // crea un array de objetos con las propiedades del producto que acabamos de agregar
     let productsOnFav = [];
    
     addToFav.addEventListener('click', () => {
             productsOnFav = JSON.parse(localStorage.getItem('arrayFav')) || [];
             let newItem = {
                 title: title,
                 price: price,
                 image: image,
                 onFavs: true
             }
    
             console.log('contenido del local : ' + localStorage.getItem('arrayFav'))
    
             console.log('productsOnFav adentro ' + productsOnFav)
             productsOnFav.push(newItem)
             localStorage.setItem('arrayFav', JSON.stringify(productsOnFav));
             location.reload();
         })
    
     console.log('productsOnFav ' + productsOnFav)
    
     console.log('contenido del local 2: ' + localStorage.getItem('arrayFav'))
    
     })