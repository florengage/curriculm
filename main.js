


console.log('hola mundo')

var contador = 0;
var imagen = document.getElementById("contenedordefoto");

document.getElementById('hace-click-btn').onclick = function(){
    console.log("el boton anda bien");
    if(contador==0){
    imagen.style.backgroundImage = "url('https://c8.alamy.com/compes/2bgafcg/javascript-programacion-de-codigo-de-programa-de-secuencia-de-comandos-vector-fondo-comando-de-script-de-codificacion-funcion-de-programacion-ilustracion-javascript-2bgafcg.jpg')";
    document.getElementById('hace-click-btn').innerHTML = "volver";
    contador =1;
}
    else{
        document.getElementById('hace-click-btn').innerHTML = "¡hacé click!";
        imagen.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/c%C3%B3digo-del-html-20580858.jpg')";
        contador =0;
    }
}

