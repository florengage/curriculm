


console.log('hola mundo')

var contador = 0;
var imagen = document.getElementById("contenedordefoto");

document.getElementById('hace-click-btn').onclick = function(){
    console.log("hola anda bien");
    if(contador==0){
    imagen.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/sun-irradia-paisaje-de-la-monta%C3%B1a-5721010.jpg')";
    document.getElementById('hace-click-btn').innerHTML = "volver";
    contador =1;
}
    else{
        document.getElementById('hace-click-btn').innerHTML = "hace click!";
        imagen.style.backgroundImage = "url('https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg')";
        contador =0;
    }
}