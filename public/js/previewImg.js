document.getElementById("prod-image").onchange = function(e) {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
  
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
  
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      let preview = document.getElementById('preview'),
              image = document.createElement('img');
            image.style.width= '80px'
      image.src = reader.result;
  
      preview.innerHTML = '';
      preview.append(image);
    };
  }

  /*let deleteProduct = document.querySelector('.reset-prod-button');

  deleteProduct.addEventListener('click', function(e) {
    e.preventDefault()
    Swal.fire({
                  title: '¿Estás seguro de que querés borrar el producto?',
                  text: "¡No lo podrás deshacer!",
                  icon: 'warning',
                  showCancelButton: true,
                  allowOutsideClick: false,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sí, guardar los cambios'
                }).then((result) => {
                  if (result.isConfirmed) {
                    executeDeleteProduct
                } 
                
                })
  })*/