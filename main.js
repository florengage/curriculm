
//json de los datos de la persona fake//
fetch('/api/users/random_user')
.then(response => response.json())
.then(datos => {
    
    console.log(datos)
let elemento = document.getElementById(('presentacion'))
elemento.innerhtml = "mi nombre es "

})