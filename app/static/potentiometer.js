let hola;
function serial(){
    $.ajax({
        type: 'POST',
        url: "/potenciometro",
    }).done(function(result) {
        let datos = document.querySelector("#datos");
        msj = document.createElement("div");
        msj.innerHTML=result.serial;
        datos.appendChild(msj)
    })
}
setInterval('serial()',1000);

